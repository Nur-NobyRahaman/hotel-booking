import React from 'react';
import single_room from '../images/single_room.jpg';
import family_room from '../images/family_room.jpg';
import double_bed from '../images/double_bed.jpg';
import Room from './Room/Room';
import Check from './Check/Check';

const rooms=[
    {id:1,name:'Single Room', img:single_room},
    {id:2,name:'Family Room', img:family_room},
    {id:3,name:'Double Room', img:double_bed},
]

const Home = () => {
    return (
        <div>
            <h1 className='text-primary m-5'>Our Rooms</h1>
            <div className='row'>
            {
                rooms.map(room=> <Room
                key={room.id}
                room={room}
                ></Room>
                )
            }
           
            </div>
        </div>
    );
};

export default Home;