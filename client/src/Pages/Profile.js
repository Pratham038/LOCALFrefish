// ProfilePage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

function Profile() {
  const { user, isAuthenticated } = useAuth0();
  const [userAddress, setUserAddress] = useState('');
  const [updatedUser, setUpdatedUser] = useState(null);

  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }
  const handleSubmit2 = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('/api/users', {
        username: user.name,
        userMail: user.email,
        useraddress: userAddress,
      });
  
      console.log(response.data);
      alert('Address Added')
      // Reset form fields
      setUserAddress('');

        alert('Address Added')
    } catch (error) {
      alert('invalid data');
      console.error(error);
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`/api/users/${user.email}`, {
        username: user.name,
        userMail: user.email,
        useraddress: userAddress,
      });

      setUpdatedUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit2}>
        <label>
          Address:
          <input
            type="text"
            value={userAddress}
            onChange={(e) => setUserAddress(e.target.value)}
          />
        </label>
        <button type="submit">Add Address</button>
      </form>
      <h1>My Profile</h1>
      <p>Name: {updatedUser?.username || user.name}</p>
      <p>Email: {updatedUser?.userMail || user.email}</p>
      <p>Address: {updatedUser?.useraddress || ''}</p>
      <button type="submit" onClick={handleSubmit}>Update Address</button>
    <h3> Your Orders </h3>
    
    </>
  );
}

export default Profile;
