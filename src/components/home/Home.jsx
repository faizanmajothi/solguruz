import React,{Fragment} from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./home.css";
import Dashboard from "./Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Listing from "./Listing";
import AddData from "./AddData";

const Home = () => {
  return (
    <Fragment>

    <div className="home-container">
      <div className=" header-container">
        <p className="home-header">
          <Link className="navbar-brand nav-brand" to={"/home"}>
            SOLGURUZ
          </Link>
        </p>
        <p className="header-icon">
          <Link to="/home/user" activeClassName="active" state={{color:"white"}}>
            <PersonOutlineIcon />
          </Link>
        </p>
      </div>
    <aside className="dashboard">
      <Dashboard />
    </aside>
    <section className="listing">
      <Listing />
    </section>
    </div>
    <Routes>
      <Route path="/home/add" element={<AddData />}>

      </Route>
    </Routes>
    </Fragment>
  );
};

export default Home;
