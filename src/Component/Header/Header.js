import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
    const[user]=useAuthState(auth);
    return (
        <div className='navbar'>
            <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/checkin"}>CheckIn</Link>
           { 
           user?.uid?
           <button onClick={()=>signOut(auth)}>Sign Out</button>:
           <Link to={"/login"}>Login</Link>}

       
        </nav>
        </div>
    );
};

export default Header;