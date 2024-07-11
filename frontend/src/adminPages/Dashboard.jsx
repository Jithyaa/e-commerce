import React from 'react'
import Sidebar from '../components/Sidebar';
import '../scss/styles/dashboard.scss'

const Dashboard = () => {
    return (
        <div className="dashboard">
          <Sidebar />
          <div className="dashboard__content">
            heyy
          </div>
        </div>
      );
    };

export default Dashboard
