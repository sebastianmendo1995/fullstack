import React from 'react';
import SpaceIndexItem from './space_index_item';

class SpaceIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchSpaces();
        
    }

    render(){
        console.log(this.props.spaces)
        const totalSpaces = this.props.spaces.length
        return (
            <div className='spaces-index'>
                <div className='spaces-content-index'>
                    <div className='page'>
                        <h4>Showing 1 - 30 of { totalSpaces }</h4>
                    </div>
                    <div className='space-index-grid'>
                        {
                            this.props.spaces.map( space => (
                                < SpaceIndexItem 
                                    key={space.id}
                                    space={space}
                                />
                            ))
                        } 
                    </div>
                </div>
            </div>
        )
    }
}

export default SpaceIndex;