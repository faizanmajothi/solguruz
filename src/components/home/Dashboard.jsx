import React from "react";
import { NavLink } from "react-router-dom";
import "./Dashboard.css";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
const Dashboard = () => {
  return (
    <div className="dashboard">
      <NavLink to="/home" actionClassName="active" className="nav-dashboard">
        <DashboardOutlinedIcon />Dashboard
      </NavLink>

      <NavLink to="/home" actionClassName="active" className="nav-dashboard">
      <TaskOutlinedIcon/> Event
      </NavLink>
     
    </div>
  );
};

export default Dashboard;
