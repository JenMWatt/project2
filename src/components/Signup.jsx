import react, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h5>sign up please</h5>
                <div className="signupbox">
                    <label>
                        First name
                    </label>
                    <input type="text" className="form-control" placeholder="First name" />
                    <div className="signupbox">
                        <label>
                            Email Address
                        </label>
                        <input type="email" className="form-control" placeholder="enter email" />
                    </div>
                    <div className="signupbox">
                        <label>password please</label>
                        <input type="password" className="form-control" placeholder="enter password" />
                    </div>
                    <div className="button">
                        <button type="submit" className="button main">
                            sign up
                        </button>
                    </div>
                </div>
            </form>

        )
    }
}