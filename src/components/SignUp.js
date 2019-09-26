import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import firebase from 'firebase/app';

class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }

    signUp() {
        const { email, password } = this.state;

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .catch( error => {
                this.setState( {error } );
            });
    }

    render() {
        return(
            <div className={'form-inline'}>
                <h2>Log In</h2>
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
                        onClick={ () => this.signUp() }>Sign Up</button>
                </div>
                <div>{this.state.error.message}</div>
                <div className="instead"><Link to={'/signin'}>Create account</Link></div>
            </div>
        )
    }
}

export default SignUp;