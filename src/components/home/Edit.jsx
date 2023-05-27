import React, { useEffect, useState, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Edit = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const [edit, setEdit] = useState({
   
  });
  useEffect(() => {
    fetch("http://localhost:8000/user/" + id)
      .then((res) => {
        return res.json();
      }).then(data=>{
        console.log(data)
        setEdit({data})
       
      })
      .catch((err) => {
        toast.error("failed " + err.message);
      });
      console.log(edit);
  }, [id]);
  function handelSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8000/user/" + id, {
      method: "PUT",
      body: JSON.stringify(edit),
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        console.log(res);
        toast.success("Register successfuly");
        navigate("/home");
      })
      .catch((err) => {
        toast.error("Faild: " + err.message);
      });
  }

  return (
    <Fragment>
      <div className="sing-container">
        <form onSubmit={handelSubmit}>
          <div className="auth-wrapper">
            <div className="auth-inner">
              <div className="mb-3">
                <label>Image</label>

                <input
                  className="form-control"
                  type="file"
                  name="img"
                  value={edit.img}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setEdit((prev) => {
                      return { ...prev, [name]: value };
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Title</label>

                <input
                  className="form-control"
                  type="text"
                  name="title"
                  value={edit.title}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setEdit((prev) => {
                      return { ...prev, [name]: value };
                    });
                  }}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>

                <input
                  className="form-control"
                  type="textarea"
                  name="description"
                  value={edit.description}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setEdit((prev) => {
                      return { ...prev, [name]: value };
                    });
                  }}
                />
              </div>
              <div className="mb-3 signup-password">
                <label>Phone</label>

                <input
                  className="form-control"
                  label="phone"
                  type="number"
                  name="phone"
                  value={edit.phone}
                  onChange={(e) => {
                    const { name, value } = e.target;
                    setEdit((prev) => {
                      return { ...prev, [name]: value };
                    });
                  }}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn">
                  Update Data
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default Edit;
