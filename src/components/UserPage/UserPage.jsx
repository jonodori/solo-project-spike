import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import googleMapReact from 'google-map-react';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      

      
    </div>
    <div>
    <iframe
              src="https://www.google.com/maps/embed/v1/search?q=Prime%20Academy&key=AIzaSyCy5qu-Xan8_Sf0dsjL6Txa3bpGAxdzNJk"
      
              width="600"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
    
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
