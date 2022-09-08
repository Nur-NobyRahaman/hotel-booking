import React, { useState } from 'react';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [user]=useAuthState(auth);

    const [
        signInWithEmailAndPassword,

    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {

        setEmail(event.target.value);

    }
    const handlePasswordBlur = (event) => {

        setPassword(event.target.value);

    }
    if (user) {
        navigate('/')
     }



    const handleSubmit = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);


    }

    return (
        <div >
            <h4>Please Login</h4>
            <button onClick={() => signInWithGoogle()}>Google Sign In</button><br /><br />

            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>
                    <input onBlur={handleEmailBlur} type={"text"} placeholder="Your email" name='email' required></input>
                </label><br></br>
                <label htmlFor='password'>
                    <input onBlur={handlePasswordBlur} type={"password"} placeholder="Your Password" name='password' required></input></label><br></br>
                
                <input type={"submit"} value="Login"></input>
            </form>

            <p>Not a member?<Link to={"/register"}>First Register</Link></p>
        </div>
    );
};

export default Login;