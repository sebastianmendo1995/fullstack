import React from 'react';
import queryString from 'query-string';


class AddingSpaceForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hostId: '',
            address: '',
            unit: '',
            city: '',
            state: '',
            zipCode: '',
            title: '',
            description: '',
            squareFt: '',
            rules: '',
            wifi: '',
            access: '',
            monday: false,
            tuesday: false,
            wednesday: false,
            thursday: false,
            friday: false,
            saturday: false,
            sunday: false,
            openTime: '',
            closeTime: '',
            notice: '',
            price: '',
            activityIds: [],
            lat: '',
            lng: '',
            capacity: '',
            photos: [],
            photosURLs: []
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }

    componentDidMount(){
        const values = queryString.parse(this.props.location.search);
        this.props.fetchActivities();
        //This doesn't update inmidiatly because is asyncronis
        this.setState({
            hostId: this.props.currentUser.id,
            address: values.address,
            unit: values.unit,
            city: values.city,
            state: values.state,
            zipCode: values.zipCode
        })
        
        $.ajax({
            method: 'GET',
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${values.unit}+${values.address},+${values.city},+${values.state}&key=${window.googleAPIKey}`
        }).then(result => this.setState({
            lat: result.results[0].geometry.location.lat,
            lng: result.results[0].geometry.location.lng
        }))
    
    }

    handleCheckbox(activityIds){
        return () => {
            if(!this.state.activityIds.includes(activityIds)){
                this.state.activityIds.push(activityIds)
                // this.setState({
                //     activityIds: arr
                // })
            }else{
                let idx = this.state.activityIds.indexOf(activityIds);
                let arr = this.state.activityIds.slice(0, idx).concat(this.state.activityIds.slice(idx+1))
                this.setState({
                    activityIds: arr
                })
            }
        } 
    }

    handleBooleanInput(type) {
        return e => {
            let newVal;
            if(e.target.checked){
                newVal = true
            } else {
                newVal = false
            }
            return this.setState({
                [type]: newVal
            })
        }
    }
    
    update(field){
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    
    
    handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('space[host_id]', this.state.hostId);
        formData.append('space[address]', this.state.address);
        formData.append('space[unit]', this.state.unit);
        formData.append('space[city]', this.state.city);
        formData.append('space[state]', this.state.state);
        formData.append('space[zip_code]', this.state.zipCode);
        formData.append('space[title]', this.state.title);
        formData.append('space[description]', this.state.description);
        formData.append('space[square_ft]', this.state.squareFt);
        formData.append('space[rules]', this.state.rules);
        formData.append('space[wifi]', this.state.wifi);
        formData.append('space[access]', this.state.access);
        formData.append('space[monday]', this.state.monday);
        formData.append('space[tuesday]', this.state.tuesday);
        formData.append('space[wednesday]', this.state.wednesday);
        formData.append('space[thursday]', this.state.thursday);
        formData.append('space[friday]', this.state.friday);
        formData.append('space[saturday]', this.state.saturday);
        formData.append('space[sunday]', this.state.sunday);
        formData.append('space[open_time]', this.state.openTime);
        formData.append('space[close_time]', this.state.closeTime);
        formData.append('space[notice]', this.state.notice);
        formData.append('space[price]', this.state.price);
        formData.append('space[activity_ids]', this.state.activityIds);
        formData.append('space[lat]', this.state.lat);
        formData.append('space[lng]', this.state.lng);
        formData.append('space[capacity]', this.state.capacity);
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("space[photos][]", this.state.photos[i]);
        }
        
        this.props.processForm(formData)
            .then(() => this.props.history.push('/'))
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            let newPhotos = this.state.photos.concat([file]);
            let newPhotosURLs = this.state.photosURLs.concat([fileReader.result]);
            this.setState({
                photos: newPhotos,
                photosURLs: newPhotosURLs
            })
        }
        if(file){
            fileReader.readAsDataURL(file)
        }
        
    }

    render(){
        let photosPreview =null
        if(this.state.photosURLs.length > 0){
            photosPreview = this.state.photosURLs.map ( (photo, i) => (
                <div key={i}>
                    <img src={photo} className='uploaded-photos'/>
                </div>
            ))
        }
        return (
            <section className='adding-space-section'>
                <div className='adding-space-container'>
                    <form onSubmit={this.handleSubmit} className='adding-form'>
                        <h2>Upload photos of your space</h2>

                        <div className='photos-grid-adding'>
                           {photosPreview}
                        </div>

                        <label>
                            <input
                                type="file"
                                onChange={this.handleFile}
                                placeholder='Select Profile Photo'
                            />
                        </label>

                        <h2>Give your Space a Title</h2>
                        <label>
                            <input 
                                type="text"
                                placeholder='Example: Downtown Loft with Skyline View'
                                value={this.state.title}
                                onChange={this.update('title')}
                                required="required"
                            />
                        </label>

                        <h2>Add a description for your space</h2>
                        <label> 
                            <textarea
                                placeholder='Enter your space description'
                                value={this.state.description}
                                onChange={this.update('description')}
                                required="required"
                            />
                            <p>Minimun 280 characters</p>
                        </label>

                        <h2>How big is the space guests can book?</h2>
                        <label> 
                            <input 
                                type="number"
                                placeholder='500 sq ft'
                                value={this.state.squareFt}
                                onChange={this.update('squareFt')}
                                requiredrequired="required"
                            />
                        </label>

                        <h2>What are your house rules?</h2>
                        <label> 
                            <textarea
                                placeholder='Enter your space description'
                                value={this.state.rules}
                                onChange={this.update('rules')}
                                required="required"
                            />
                            <p>Minimun 100 characters</p>
                        </label>

                        <h2>What’s your wifi name and password?</h2>
                        <label>
                            <input 
                                type="text"
                                placeholder='Example: Name="Serendipia" Password="serendipia420"'
                                value={this.state.wifi}
                                onChange={this.update('wifi')}
                                required="required"
                            />
                        </label>
                        

                        <h2>Which days of the week are your place available?</h2>
                        <div className='grid-adding-space'>
                            <div>
                                <div className="pretty p-switch p-fill">
                                    <input 
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('monday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Monday</label>
                                    </div>
                                </div>
                                <div className="pretty p-switch p-fill">
                                    <input
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('tuesday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Tuesday</label>
                                    </div>
                                </div>
                                <div className="pretty p-switch p-fill">
                                    <input
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('wednesday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Wednesday</label>
                                    </div>
                                </div>
                                <div className="pretty p-switch p-fill">
                                    <input
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('thursday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Thursday</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="pretty p-switch p-fill">
                                    <input
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('friday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Friday</label>
                                    </div>
                                </div>
                                <div className="pretty p-switch p-fill">
                                    <input
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('saturday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Saturday</label>
                                    </div>
                                </div>
                                <div className="pretty p-switch p-fill">
                                    <input
                                        type="checkbox"
                                        onClick={this.handleBooleanInput('sunday')}
                                    />
                                    <div className="state p-primary">
                                        <label>Sunday</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <h2>Which Activities can be done in your place?</h2>
                        <label>
                            {
                                this.props.activities.map( activity => {
                                    return(
                                        <div className="pretty p-icon p-round p-smooth" key={activity.id}>
                                            <input 
                                                type="checkbox"
                                                value={activity.id}
                                                onClick={this.handleCheckbox(activity.id)}
                                            />
                                            <div className="state p-success">
                                                <i className="icon mdi mdi-check"></i>
                                                <label>{activity.name}</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </label>

                        <h2>Set your operating hours</h2>
                        <div className='hour-container'>
                            <label>
                                <select
                                    name="openTime"
                                    id="openTime"
                                    value={this.state.openTime}
                                    onChange={this.update('openTime')}
                                    required="required"
                                >
                                    <option defaultValue value="" disabled>Open</option>
                                    <option value="00:00">12:00 AM</option>
                                    <option value="00:30">12:30 AM</option>
                                    <option value="1:00">1:00 AM</option>
                                    <option value="1:30">1:30 AM</option>
                                    <option value="2:00">2:00 AM</option>
                                    <option value="2:30">2:30 AM</option>
                                    <option value="3:00">3:00 AM</option>
                                    <option value="3:30">3:30 AM</option>
                                    <option value="4:00">4:00 AM</option>
                                    <option value="4:30">4:30 AM</option>
                                    <option value="5:00">5:00 AM</option>
                                    <option value="5:30">5:30 AM</option>
                                    <option value="6:00">6:00 AM</option>
                                    <option value="6:30">6:30 AM</option>
                                    <option value="7:00">7:00 AM</option>
                                    <option value="7:30">7:30 AM</option>
                                    <option value="8:00">8:00 AM</option>
                                    <option value="8:30">8:30 AM</option>
                                    <option value="9:00">9:00 AM</option>
                                    <option value="9:30">9:30 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="10:30">10:30 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="11:30">11:30 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="12:30">12:30 PM</option>
                                    <option value="13:00">13:00 PM</option>
                                    <option value="13:30">13:30 PM</option>
                                    <option value="14:00">14:00 PM</option>
                                    <option value="14:30">14:30 PM</option>
                                    <option value="15:00">15:00 PM</option>
                                    <option value="15:30">15:30 PM</option>
                                    <option value="16:00">16:00 PM</option>
                                    <option value="16:30">16:30 PM</option>
                                    <option value="17:00">17:00 PM</option>
                                    <option value="17:30">17:30 PM</option>
                                    <option value="18:00">18:00 PM</option>
                                    <option value="18:30">18:30 PM</option>
                                    <option value="19:00">19:00 PM</option>
                                    <option value="19:30">19:30 PM</option>
                                    <option value="20:00">20:00 PM</option>
                                    <option value="20:30">20:30 PM</option>
                                    <option value="21:00">21:00 PM</option>
                                    <option value="21:30">21:30 PM</option>
                                    <option value="22:00">22:00 PM</option>
                                    <option value="22:30">22:30 PM</option>
                                    <option value="23:00">23:00 PM</option>
                                    <option value="23:30">23:30 PM</option>
                                </select>
                            </label>
                            <label>
                                <select
                                    name="closeTime"
                                    id="closeTime"
                                    value={this.state.closeTime}
                                    onChange={this.update('closeTime')}
                                    required="required"
                                >
                                    <option defaultValue value="" disabled>Close</option>
                                    <option value="00:00">12:00 AM</option>
                                    <option value="00:30">12:30 AM</option>
                                    <option value="1:00">1:00 AM</option>
                                    <option value="1:30">1:30 AM</option>
                                    <option value="2:00">2:00 AM</option>
                                    <option value="2:30">2:30 AM</option>
                                    <option value="3:00">3:00 AM</option>
                                    <option value="3:30">3:30 AM</option>
                                    <option value="4:00">4:00 AM</option>
                                    <option value="4:30">4:30 AM</option>
                                    <option value="5:00">5:00 AM</option>
                                    <option value="5:30">5:30 AM</option>
                                    <option value="6:00">6:00 AM</option>
                                    <option value="6:30">6:30 AM</option>
                                    <option value="7:00">7:00 AM</option>
                                    <option value="7:30">7:30 AM</option>
                                    <option value="8:00">8:00 AM</option>
                                    <option value="8:30">8:30 AM</option>
                                    <option value="9:00">9:00 AM</option>
                                    <option value="9:30">9:30 AM</option>
                                    <option value="10:00">10:00 AM</option>
                                    <option value="10:30">10:30 AM</option>
                                    <option value="11:00">11:00 AM</option>
                                    <option value="11:30">11:30 AM</option>
                                    <option value="12:00">12:00 PM</option>
                                    <option value="12:30">12:30 PM</option>
                                    <option value="13:00">13:00 PM</option>
                                    <option value="13:30">13:30 PM</option>
                                    <option value="14:00">14:00 PM</option>
                                    <option value="14:30">14:30 PM</option>
                                    <option value="15:00">15:00 PM</option>
                                    <option value="15:30">15:30 PM</option>
                                    <option value="16:00">16:00 PM</option>
                                    <option value="16:30">16:30 PM</option>
                                    <option value="17:00">17:00 PM</option>
                                    <option value="17:30">17:30 PM</option>
                                    <option value="18:00">18:00 PM</option>
                                    <option value="18:30">18:30 PM</option>
                                    <option value="19:00">19:00 PM</option>
                                    <option value="19:30">19:30 PM</option>
                                    <option value="20:00">20:00 PM</option>
                                    <option value="20:30">20:30 PM</option>
                                    <option value="21:00">21:00 PM</option>
                                    <option value="21:30">21:30 PM</option>
                                    <option value="22:00">22:00 PM</option>
                                    <option value="22:30">22:30 PM</option>
                                    <option value="23:00">23:00 PM</option>
                                    <option value="23:30">23:30 PM</option>
                                </select>
                            </label>
                        </div>

                        <h2>Select you cancellation policies: </h2>
                        <label>
                            <input
                                type="number"
                                placeholder='15 notice'
                                value={this.state.notice}
                                onChange={this.update('notice')}
                                required="required"
                            />
                        </label>

                        <h2>Price per hour:</h2>
                        <label>
                            <input 
                                type="number"
                                placeholder='$200'
                                value={this.state.price}
                                onChange={this.update('price')}
                                required="required"
                            />
                        </label>

                        <h2>What’s the capacity of your place?</h2>
                        <label>
                            <input
                                type="number"
                                placeholder='250'
                                value={this.state.capacity}
                                onChange={this.update('capacity')}
                                required="required"
                            />
                        </label>

                        <h2>How do guests get access to your space?</h2>
                        <label>
                            <textarea
                                placeholder="Optional example: We are located at 3rd and Northwood Ave across from Target. There are 10 parking spots in the back and metered parking out front. When you arrive, hit the buzzer for ‘328’ and ask for Sarah and come up to floor 3, Apt 28."
                                value={this.state.access}
                                onChange={this.update('access')}
                            />
                            <p>Minimun 100 characters</p>
                        </label>

                        <button type='submit' className='btn btn-crete-space'>Create Space</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default AddingSpaceForm;