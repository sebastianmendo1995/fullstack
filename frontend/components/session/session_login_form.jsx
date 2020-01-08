import React from 'react';
import {Link} from 'react-router-dom';

class SessionLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.simulateLogin = this.simulateLogin.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
        })
        this.props.closeModal();
    }

    simulateLogin(){
        
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        console.log('errors from form')
        console.log(this.props.errors)

        return (
            <div>
                <div className="modal-banner">
                    <button onClick={this.handleCancel}>x</button>
                </div>
                <div className="top-content">
                    <h3>Welcome back</h3>
                    <p>Please Log In</p>
                </div>
                <button className="btn btn-social-fb" onClick={this.simulatelogin}>
                    <i className="fab fa-facebook"></i>
                    Simulate Log In
                </button>
                <div className="text-center">
                    <p>or</p>
                </div>

                <form>
                    <input 
                        type="email"
                        value={this.state.email}
                        onChange={this.handleInput('email')}
                        placeholder="Email" id="email" 
                    />
                    <input 
                        type="password"
                        value={this.state.password} 
                        onChange={this.handleInput('password')}
                        placeholder="Password" 
                        id="password"
                    />
                    {this.props.errors ? this.renderErrors() : null}
                    <button className="btn session-login" onClick={this.handleSubmit}>Log In</button>
                </form>
                <div className="text-center-password">
                    <p><a className="forgot-password" href="https://www.peerspace.com/app/password-reset">Forgot Password</a></p>
                    <p className="">Don't have an account?
                        <Link to='/signup'>Sign Up</Link>
                    </p>
                </div>
            </div>
        )
    }
}

export default SessionLoginForm;