import React, { useEffect, useState } from "react";
import "./Listing.css";
import axios from "axios"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Listing = (props) => {
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();
  const [query,setQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/user")
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((res) => {
        setRecords(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:8000/user?q=${query}`)
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((res) => {
        setRecords(res);
      })
      .catch((err) => console.log(err));
  }, [query]);
  return (
    <div>
      <div className="card search-card">
        <div className="card-body mb-2">
          <input
          className="search"
            type="search"
            placeholder=" Search by Title and City"
            name="search"
            onChange={(e)=>{
              setQuery(e.target.value)
           
            }}
          />
          <select name="City" placeholder="City">
            <option select>City</option>
            <option>Mumbai</option>
            <option>Ahmedabad</option>

            <option>Dehli</option>
          </select>
          <select name="Date" placeholder="City">
            <option select>Date</option>
            <option>Mumbai</option>
            <option>Ahmedabad</option>

            <option>Dehli</option>
          </select>
          <Link to="/home/add" className="btn btn-warn">
            + Create
          </Link>
        </div>
      </div>
      <div className="card listing-card">
        <div className="card-body">
          <table className="table">
            <thead>
              <tr className="top-row mb-3">
                <td>No</td>
                <td>Images</td>
                <td>Title</td>
                <td>Description</td>
                <td style={{ width: "15%" }}>Phone</td>
                <td style={{ width: "10%" }}>Likes</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody className="">
              {records.map((d, i) => {
                console.log(d);
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td className="list-img">{d.img}</td>
                    <td>{d.title}</td>
                    <td>{d.description}</td>
                    <td>{d.phone}</td>
                    <td>{20}</td>
                    <td>
                      {
                        <>
                          <div class="form-switch">
                            <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                            />
                          </div>
                        </>
                      }
                    </td>
                    <td>
                      <div className="action">
                        <button className="info-btn">
                          <Link to={`/home/view/${d.id}`}>
                            <InfoOutlinedIcon />
                          </Link>
                        </button>
                        <buttn className="edit-btn">
                          <Link to={`/home/edit/${d.id}`}>
                            <DriveFileRenameOutlineOutlinedIcon />
                          </Link>
                        </buttn>
                        <buttn
                          className="delete-btn"
                          onClick={(e) => handelDelete(d.id)}
                        >
                          <DeleteOutlineOutlinedIcon />
                        </buttn>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  function handelDelete(id) {
    window.confirm("Do you want delete? ");
    axios.delete("http://localhost:8000/user/" + id)
    .then(res=>
      {toast.warn("Delete Recored")
    navigate("/home")
    }).catch()
  }
};

export default Listing;
