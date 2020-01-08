import React from 'react';
import {Link} from 'react-router-dom';

class SessionSignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            first_name: "",
            last_name: "",
            jobTitle: "",
            companyName: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this)
    }

    handleInput(type) {
        return e => {
            this.setState({
                [type]: e.currentTarget.value
            })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.closeModal())
    }

    handleCancel() {
        this.setState({
            email: '',
            password: '',
            first_name: "",
            last_name: "",
            jobTitle: "",
            companyName: ""
        })
        this.props.closeModal();
    }

    renderErrors() {
        $(".input").each(function () {
            if ($(this).val().trim() == '')
                $(this).css('border-color', 'red');
            else
                $(this).css('border-color', '');
        });

        let errorEmail=null;
        let errorFirstName=null;
        let errorLastName=null;
        let errorPassword=null;

        this.props.errors.forEach( error => {
            if (error.includes('Email') ){
                errorEmail = error;  
            } else if (error.includes('First')) {
                errorFirstName = error  
            } else if(error.includes('Last')) {
                errorLastName = error 
            } else if(error.includes('Password')) {
                errorPassword = error
            } 
        });

        const errorArr = [<p>{errorFirstName}</p>, <p>{errorLastName}</p>, <p>{errorEmail}</p>, <p>{errorPassword}</p>]

        return errorArr;

    }

    render() {
        return (
            <div>
                <div className="modal-banner">
                    <button onClick={this.handleCancel}>x</button>
                </div>
                <div className="top-content">
                    <h3>Join Peerspace</h3>
                    <p>Book unique spaces directly from local hosts</p>
                </div>
                <button className="btn btn-social-fb" onClick={this.simulatelogin}>
                    <i className="fab fa-facebook"></i>
                    Simulate Sign Up
                </button>
                <div className="text-center">
                    <p>or</p>
                </div>

                <form className='form-signup'>
                    <input
                        type="text"
                        value={this.state.first_name}
                        onChange={this.handleInput('first_name')}
                        placeholder="First Name" 
                        className='input signup-first-name'
                    />
                    {this.props.errors ? this.renderErrors()[0] : null}
                    <input
                        type="text"
                        value={this.state.last_name}
                        onChange={this.handleInput('last_name')}
                        placeholder="Last Name" 
                        className='input signup-last-name'
                    />
                    {this.props.errors ? this.renderErrors()[1] : null}
                    <input
                        type="text"
                        value={this.state.jobTitle}
                        onChange={this.handleInput('jobTitle')}
                        placeholder="Job Title (Optional)" 
                        id='jobTitle'
                    />
                    <input
                        type="text"
                        value={this.state.companyName}
                        onChange={this.handleInput('companyName')}
                        placeholder="Company Name (Optional)" 
                        id='companyName'
                    />
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="Email" 
                        className='input signup-email'
                    />
                    {this.props.errors ? this.renderErrors()[2] : null}
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput('password')}
                        placeholder="Password"
                        className='input signup-password'
                    />
                    {this.props.errors ? this.renderErrors()[3] : null}
                    
                    <button className="btn session-login" onClick={this.handleSubmit}>Sign Up</button>
                </form>
                <div className="text-center-password">
                    <p>By clicking Sign Up, you agree to Peerspace's Services Agreement and Privacy Policy</p>
                    <p className="">Already have an account
                        <Link to='/login'>Log In</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default SessionSignupForm;