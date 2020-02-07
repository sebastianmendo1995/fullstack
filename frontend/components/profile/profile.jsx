import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.currentUser
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('user[email]', this.props.currentUser.email)
        formData.append('user[first_name]', this.state.firstName);
        formData.append('user[last_name]', this.state.lastName);
        formData.append('user[phone_number]', this.state.phoneNumber);
        formData.append('user[company_name]', this.state.companyName);
        formData.append('user[job_title]', this.state.jobTitle);

        this.props.updateUser(this.props.currentUser.id, formData)
    }

    handleChange(type){
        return e => {
            if(type === 'phoneNumber'){
                if (Number(e.currentTarget.value) || e.currentTarget.value === "") {
                    this.setState({
                        [type]: e.currentTarget.value
                    })
                }
            } else {
                this.setState({
                    [type]: e.currentTarget.value
                })
            }
        }
    }
    
    render() {
        return (
            <div className='profile-body'>
                <div id='user-form'>
                    <div className='user-form-header'>
                        <h3>Profile</h3>
                    </div>
                    <div className='inner-form'>
                        <h4>Profile Photo</h4>
                        <hr/>
                        <div className='profile-avatar-container'>
                            <img src={window.user} className='profile_avatar' alt=""/>
                            <input
                                type="file"
                                onChange={this.handleFile}
                                className='input-file-avatar'
                            />
                        </div>
                        <h4>Basic Information</h4>
                        <hr/>
                        <form onSubmit={this.handleSubmit}>
                            <div className='input-container'>
                                <label>First Name</label>
                                <input
                                    type="text"
                                    value={this.state.firstName}
                                    onChange={this.handleChange('firstName')}
                                    placeholder='First Name'
                                />
                            </div>
                            <div className='input-container'>
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    value={this.state.lastName}
                                    onChange={this.handleChange('lastName')}
                                    placeholder='Last Name'
                                />
                            </div>
                            <div className='input-container'>
                                <label>Phone Number</label>
                                <input
                                    type="text"
                                    value={this.state.phoneNumber}
                                    onChange={this.handleChange('phoneNumber')}
                                    placeholder='Phone Number'
                                />
                            </div>
                            <div className="input-container">
                                <label>Email</label>
                                <input
                                    disabled
                                    id='email-input'
                                    type="text"
                                    value={this.props.currentUser.email}
                                />
                            </div>
                            <div className="input-container">
                                <label>Company Name</label>
                                <input
                                    type="text"
                                    value={this.state.companyName}
                                    onChange={this.handleChange('companyName')}
                                    placeholder='Company Name'
                                />
                            </div>
                            <div className="input-container">
                                <label>Job Title</label>
                                <input
                                    type="text"
                                    value={this.state.jobTitle}
                                    onChange={this.handleChange('jobTitle')}
                                    placeholder='Job Title'
                                />
                            </div>
                            <button type='submit' className='btn-update-user'>Save Changes</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;