import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useNavigate } from 'react-router-dom'
import Check from '../Check/Check';

const Checkin = () => {
    const [check,setCheck]=useState('');
    const [user] = useAuthState(auth);
    const navigate=useNavigate();

    const roomType=(event)=>{
        setCheck(event.target.value);

        
    }
    const handleSubmit=(event)=>{
         event.preventDefault();
         return navigate('/check')
        }
        // if(handleSubmit){
        //     setCheck('Successfully Check In')
        //   }
    return (
        <form onSubmit={handleSubmit}>
            <div class="mb-3 w-50 mx-auto mt-5">
                <label for="name" class="form-label ">Your Name</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" required/>
                
            </div>
            <div class="mb-3 w-50 mx-auto">
                <label for="exampleInputEmail1" class="form-label ">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={user?.email} readOnly required/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3 w-50 mx-auto">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="phone" required/>
            </div>
            <div class="mb-3 w-50 mx-auto">
                <label for="phone" class="form-label">Room Type</label>
                <input onBlur={roomType} type="text" class="form-control" id="Room"  required />
            </div>
           <p>{check}</p>
            <div class="mb-3 w-50 mx-auto">
                <label for="Payment" class="form-label">Payment</label>
                <input type="text" class="form-control" id="Payment"required />
            </div>
            {/* <input  onClick={handleSubmit} type="submit" class="form-control mb-3 w-25 bg-primary  mx-auto" id="phone" value={"Check In"} />
            <p>{check}</p> */}
            <button type="submit" class="btn btn-primary">Check In</button>
           
        </form>
    );
};

export default Checkin;