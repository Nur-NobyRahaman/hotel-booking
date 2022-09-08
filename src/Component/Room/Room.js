import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Room = ({ room }) => {
    const { name, img } = room;
    
    return (
        <div class="card">
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button  class="btn btn-primary" >{<Link  className='text-decoration-none text-light fs-5 fw-bold' to="/checkin">Check In</Link>}</button>

                
            </div>
        </div>
    );
};

export default Room;