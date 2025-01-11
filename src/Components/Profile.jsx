import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { FaUserTie } from "react-icons/fa";
import { TfiAngleUp, TfiAngleDown } from "react-icons/tfi";

function Profile() {
  const [open, setOpen] = useState(false);
  const [angleUp, setAngleUp] = useState(true);

  const handleArrow = () => {
    setAngleUp(!angleUp);
  };

  return (
    <>
      <div className="card shadow mt-5 bg-info px-3 py-1">
        <div className="d-flex justify-content-between">
          <h5 className="text-light pt-2">Profile</h5>
          <button
            onClick={() => setOpen(!open)}
            className="btn btn-outline-info border-0 text-light"
          >
            <div onClick={handleArrow}>
              {angleUp ? (
                <TfiAngleDown className="fs-3" />
              ) : (
                <TfiAngleUp className="fs-3" />
              )}
            </div>
          </button>
        </div>
      </div>

      <Collapse in={open}>
        <div className="container mt-1 card shadow bg-info p-4">
          <label>
            <input type="file" style={{ display: "none" }} />
            <FaUserTie
              style={{ fontSize: "8.5rem", borderRadius: "50%" }}
              className="text-light mt-3 border border-2 p-3 shadow"
            />
          </label>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Github link"
            />
            <input
              type="text"
              className="form-control mt-3"
              placeholder="LinkedIn link"
            />
            <div className="d-grid mt-3">
              <button className="btn btn-info shadow border fw-bold">
                Update
              </button>
            </div>
          </div>
        </div>
      </Collapse>
    </>
  );
}

export default Profile;
