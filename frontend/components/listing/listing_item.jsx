import React from 'react'

class ListingItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: 1
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchSpace(this.props.space)
    }

    handleDelete(){
        this.props.deleteSpace(this.props.space.id)
    }

    render(){
        let space = this.props.space
        return(
            <div className='listing-space-item'>
               <div className='listing-space-container'>
                   <div className='carousel-listing'>
                       
                   </div>
                   <div className='listing-space-info'>
                       <div>
                        <h3>{space.title}</h3>
                        <p>{space.city}, {space.state}</p>
                        <p>from ${space.price}/hr</p>
                       </div>
                   </div>
                   <div className='btn-listing-container'>
                       <button className='btn btn-primary' onClick={this.handleDelete}>Delete Space</button>
                   </div>

               </div>
            </div>
        )
    }
}

export default ListingItem;