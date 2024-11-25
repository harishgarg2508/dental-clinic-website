import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './profile.css';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: '',
    username: '',
    photo: '' // Added photo field
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setUser({
          name: 'John Doe',
          username: 'johndoe123',
          photo: '' // Initial photo placeholder
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    console.log('Logging out...');
    window.location.href = 'http://localhost/dental-clinic-website/src/index.php';
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUser((prevUser) => ({
          ...prevUser,
          photo: reader.result // Update photo with base64 encoded image
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="user-profile">
        <div className="profile-card">
          <h1 className="profile-title">Your Profile</h1>
          <label className="avatar-container">
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: 'none' }}
            />
            {user.photo ? (
              <img src={user.photo} alt="User Avatar" className="avatar" />
            ) : (
              <div className="avatar">
                {user.name.split(' ').map((n) => n[0]).join('')}
              </div>
            )}
          </label>
          <h2 className="user-name">{user.name}</h2>
          <p className="user-username">@{user.username}</p>
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
