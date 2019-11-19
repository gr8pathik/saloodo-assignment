import React from 'react';
import '../styles/Login.css'

class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = this.state;
        if(username && password) {
            this.props.loginUser(this.state.username, this.state.password)
        } else {
            alert("Enter details")
        }
    };
    render() {
        const {loggedInErrorMessage} = this.props.user;
        return (
            <div className="text-center">
                <form className="form-signin" onSubmit={this.handleSubmit}>
                    <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg"
                         alt=""
                         width="72" height="72"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    {loggedInErrorMessage !== "" && <p className="text-danger">{loggedInErrorMessage}</p>}
                    <label htmlFor="inputUsername" className="sr-only">Email address</label>
                    <input type="text" id="inputUsername" className="form-control" placeholder="Username" name="username" required
                           autoFocus onChange={this.handleChange}/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" required onChange={this.handleChange}/>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div>)
    }
};

export default LoginComponent