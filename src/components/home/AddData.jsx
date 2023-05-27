import React, { useState, Fragment } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddData = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");

  function isValid() {
    let isValidValue = true;
    let error = "Enter the value in: ";
    if (title === "" || title === null) {
      isValidValue = false;
      error += " title "
    }
    if (img === "" || img === null) {
      isValidValue = false;
      error += " img "
    }
    if (description === "" || description === null) {
      isValidValue = false;
      error += " description "
    }
    if (phone === "" || phone === null) {
      isValidValue = false;
      error += " phone "
    }
    if(!isValidValue){
      toast.warning(error)
    }
    return isValidValue;
  }

  function handelSubmit(e) {
    e.preventDefault();
    let USER_DATA = { title, img, description, phone };
    console.log(USER_DATA);
  
    if (isValid()) {
      fetch("http://localhost:8000/user", {
        method: "POST",
        body: JSON.stringify(USER_DATA),
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
     setDescription("");
     setImg("");
     setPhone("");
     setTitle("");
    }
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
                  label="Image"
                  type="file"
                  name="image"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Title</label>

                <input
                  className="form-control"
                  label="tite"
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Description</label>

                <input
                  className="form-control"
                  label="description"
                  type="textarea"
                  name="text"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3 signup-password">
                <label>Phone</label>

                <input
                  className="form-control"
                  label="phone"
                  type="number"
                  name="number"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn">
                  Add Data
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddData;
