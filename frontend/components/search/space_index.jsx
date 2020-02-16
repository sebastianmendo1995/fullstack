import React from 'react';
import SpaceIndexItem from './space_index_item';

class SpaceIndex extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            page: 1
        }

        this.right = this.right.bind(this);
        this.left = this.left.bind(this);
    }

    componentDidMount(){
        this.props.updateFilter('page', this.state.page)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.page !== this.state.page){
            this.props.updateFilter('page', this.state.page)
        }
    }

    updatePage(p) {
        this.setState({
            page: p
        })
    }

    makeButtons() {
        if(this.props.totalPages){
            if (this.state.page <= 2) {
                return (
                    <div className='pagination-container'>
                        {this.left(this.state.page)}
                        <button onClick={() => this.updatePage(1)} className={this.state.page === 1 ? "pagination-btn active" : "pagination-btn"} >1</button>
                        {this.props.totalPages < 2 ? null : <button onClick={() => this.updatePage(2)} className={this.state.page === 2 ? "pagination-btn active" : "pagination-btn"}>2</button>}
                        {this.props.totalPages < 3 ? null : <button onClick={() => this.updatePage(3)} className={this.state.page === 3 ? "pagination-btn active" : "pagination-btn"}>3</button>}
                        {this.right(this.state.page)}
                    </div>
                )
            } else if (this.state.page > this.props.totalPages - 2) {
                return (
                    <div className='pagination-container'>
                        
                        {this.left(this.state.page)}
                        <button onClick={() => this.updatePage(this.props.totalPages - 2)} className={this.state.page === this.props.totalPages - 2 ? "pagination-btn active" : "pagination-btn"}>{this.props.totalPages - 2}</button>
                        <button onClick={() => this.updatePage(this.props.totalPages - 1)} className={this.state.page === this.props.totalPages - 1 ? "pagination-btn active" : "pagination-btn"}>{this.props.totalPages - 1}</button>
                        <button onClick={() => this.updatePage(this.props.totalPages)} className={this.state.page === this.props.totalPages ? "pagination-btn active" : "pagination-btn"}>{this.props.totalPages}</button>
                        {this.right(this.state.page)}
                    </div>
                )
            } else {
                return (
                    <div className='pagination-container'>
                        {this.left(this.state.page)}
                        <button onClick={() => this.updatePage(this.state.page - 1)} className={this.state.page === this.state.page - 1 ? "pagination-btn active" : "pagination-btn"}>{this.state.page - 1}</button>
                        <button onClick={() => this.updatePage(this.state.page)} className={this.state.page === this.state.page ? "pagination-btn active" : "pagination-btn"}>{this.state.page}</button>
                        <button onClick={() => this.updatePage(this.state.page + 1)} className={this.state.page === this.state.page + 1 ? "pagination-btn active" : "pagination-btn"}>{this.state.page + 1}</button>
                        {this.right(this.state.page)}
                    </div>
                )
            }
        }
    }

    left(page) {
        if (page === 1) {
            return (
                <button className="pagination-btn inactive" disabled onClick={() => this.updatePage(this.state.page-1)}><i className="fas fa-angle-left"></i></button>
            )
        } else {
            return (
                <button className="pagination-btn" onClick={() => this.updatePage(this.state.page-1)}><i className="fas fa-angle-left"></i></button>
            )
        }
    }

    right(page) {
        if (page === this.props.totalPages) {
            return (
                <button className="pagination-btn inactive" disabled onClick={() => this.updatePage(this.state.page+1)}><i className="fas fa-angle-right"></i></button>
            )
        } else {
            return (
                <button className="pagination-btn" onClick={() => this.updatePage(this.state.page+1)}><i className="fas fa-angle-right"></i></button>
            )
        }
    }

    pageRange(){
        let start;
        let end
        if (this.props.totalPages) {
            start = 24 *this.state.page - 23
            end = 24 * this.state.page
        } 

        return `${start} - ${end}`
    }

    totalSpaces(){
        if (this.props.totalPages) {
            return this.props.totalPages * 24
        }
    }

    render(){

        let paginationButtons = this.makeButtons();
        let range = this.pageRange();
        let totalSpaces = this.totalSpaces();

        return (
            <div className='spaces-index'>
                <div className='spaces-content-index'>
                    <div className='page'>
                        <h4>Showing {range} of { totalSpaces }</h4>
                    </div>
                    <div className='space-index-grid'>
                        {
                            this.props.spaces.map( space => (
                                < SpaceIndexItem 
                                    key={space.id}
                                    space={space}
                                    currentUser = {this.props.currentUser}
                                />
                            ))
                        } 
                    </div>
                    <div className='pagination'>
                        <div className='pagination-content'>
                            <h4>Showing {range} of {totalSpaces}</h4>
                            {paginationButtons}
                        </div>
                    </div>
                    <div className='aditional-information'>

                    </div>
                </div>
            </div>
        )
    }
}

export default SpaceIndex;