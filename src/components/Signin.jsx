import react, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form>
                <h5>sign in please</h5>
                <div className="signinbox">
                    <label>
                        Email Address
                    </label>
                    <input type="email" className="form-control" placeholder="enter email" />
                </div>
                <div className="signinbox">
                    <label>password please</label>
                    <input type="password" className="form-control" placeholder="enter password" />
                </div>
                <div className="button">
                    <button type="submit" className="button main">
                        sign in
                    </button>
            </form>

        )

    }



}