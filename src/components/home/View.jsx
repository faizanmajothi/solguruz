import React, { Fragment, useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const View = () => {
  const { id } = useParams();
  const [view, setView] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/user/" + id)
      .then((res) => {
        return res.json();
      }).then(data=>{
        console.log(data)
        setView([data])
        toast.success("successfuly");
      })
      .catch((err) => {
        toast.error("Faild: " + err.message);
      });
  }, [id]);

  return (
    <Fragment>
      <div className="sing-container">
        <div className="card">
          {view.map((d, i) => {
            return (
              <div className="container p-5" key={i}>
                <p>Id : {d.id}</p>
                <p>title : {d.title}</p>
                <p>description : {d.description}</p>
                <p>Phone : {d.phone}</p>
              </div>
            );
          })}
          <Link to="/home">Back to Home</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default View;
