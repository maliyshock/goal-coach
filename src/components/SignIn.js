import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';


class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: {
                message: ''
            }
        }
    }

    signIn() {
        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword( email, password )
            .catch( error => {
                this.setState( {error } );
            });
    }

    render() {
        return(
            <div className={'form-inline'}>
                <h2>Create Account</h2>
                <div className={'form-group'}>
                    <input
                        className={'form-control'}
                        type='email'
                        placeholder={'email'}
                        onChange={ (e) => this.setState( { email: e.target.value } ) }
                    />
                    <input
                        className={'form-control'}
                        type='password'
                        placeholder={'password'}
                        onChange={ (e) => this.setState( { password: e.target.value } ) }
                    />
                    <button
                        className={'btn btn-primary'}
                        type={'button'}
                        onClick={ () => this.signIn() }>Sign In</button>
                </div>
                <div>{this.state.error.message}</div>
                <div className="instead"><Link to={'/signup'}>Log in</Link></div>
            </div>
        )
    }
}

export default SignIn;