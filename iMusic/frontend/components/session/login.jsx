import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({[type]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
    }

    render() {
        return (
            <div className="session-form-container">
                <div className="session-form">
                    <h2>Login Here!</h2>
                    <form>
                        <label>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput("username")}
                                placeholder="Username"
                                // onChange={e => this.setState({ [username]: e.target.value })}

                            />
                        </label>
                        <label>Password:
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.handleInput("password")}
                                placeholder="Password"
                                // onChange={e => this.setState({ [password]: e.target.value })}
                            />
                        <button onClick={this.handleSubmit}>Login</button>
                        </label>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;