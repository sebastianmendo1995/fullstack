import React from 'react'

class ListingItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slide: 1
        }
    }
    
    componentDidMount(){
        this.props.fetchSpace(this.props.space)
    }

    render(){
        let space = this.props.space
        debugger
        return(
            <div>
                {/* <div className='slider-container'>
                    {
                        space.photoUrls.map((photoURL, idx) => (
                            <Link to={`/spaces/${space.id}`} key={`${space.id}-${idx}`}>
                                <div className='mySlides fade' >
                                    {
                                        (this.state.slide === idx + 1) ? (
                                            <img className={`slider${idx + 1} slider-img`} src={photoURL} />
                                        ) : (
                                                <img className={`slider${idx + 1} slider-img hidden`} src={photoURL} />
                                            )
                                    }
                                </div>
                            </Link>
                        ))
                    }
                </div> */}
            </div>
        )
    }
}

export default ListingItem;