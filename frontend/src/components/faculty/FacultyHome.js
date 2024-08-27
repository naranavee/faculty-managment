import React from 'react';
import { useNavigate } from 'react-router-dom';
import Profile from './Profile';  // Import the Profile component
import './FacultyHome.css'; // Import CSS for FacultyHome

function FacultyHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    navigate('/faculty/login'); // Redirect to the login page
  };

  return (
    <div className="faculty-home">
      <aside className="sidebar">
        <Profile />
        {/* Add more sidebar items here if needed */}
      </aside>
      <main className="content">
        <h2>Welcome to the Faculty Home Page!</h2>
        <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
}

export default FacultyHome;
