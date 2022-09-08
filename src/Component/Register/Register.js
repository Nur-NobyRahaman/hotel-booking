import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'

const Register = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [error,setError]=useState()
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
    ] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = (event) => {

        setEmail(event.target.value);

    }
    const handlePasswordBlur = (event) => {

        setPassword(event.target.value);

    }
    const handleConfirmPasswordBlur = (event) => {

        setConfirmPassword(event.target.value);

    }
    if(user){
        navigate('/')
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 6) {
            setError('password will de 6 character or long');
            return;
        }
        if (password != confirmPassword) {
            setError('Two password are not match');
            return;
        }

        createUserWithEmailAndPassword(email, password)
        


    }
    


    return (
        <div>
            <h4>Register Here</h4>
            <form onSubmit={handleSubmit}>
                <p>{error}</p>
                <label htmlFor='email'>
                    <input onBlur={handleEmailBlur} type={"text"} placeholder="Your email" name='email' required></input>
                </label><br></br>
                <label htmlFor='password'>
                    <input onBlur={handlePasswordBlur} type={"password"} placeholder="Your Password" name='password' required></input></label><br></br>
                <label htmlFor='password'>
                    <input onBlur={handleConfirmPasswordBlur} type={"password"} placeholder="Confirm password" name='confirm-password' required></input></label><br></br>
                <input type={"submit"} value="Register"></input>
            </form>
            <p>Already Register?<Link to={"/login"}>Login</Link></p>
        </div>
    );
};

export default Register;