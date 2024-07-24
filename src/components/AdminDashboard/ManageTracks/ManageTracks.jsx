import { useDispatch, useSelector } from "react-redux";
import DashboardMainTitle from "../DashboardMainTitle/DashboardMainTitle";
import { useState } from "react";

import "./manageTracks.css";
import { addTrack } from "../../../rtk/features/tracks/TracksActions";
import { useNavigate } from "react-router-dom";

const ManageTracks = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTrack(inputs));
    navigate("/admin_dashboard/tracks");

  };

  return (
    <>
      <DashboardMainTitle title={"Manage Tracks"} />
      <div className="manage-tracks">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="d-block">
            Track Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={inputs.name || ""}
            onChange={handleChange}
          />
          <label htmlFor="description" className="d-block">
            Track description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={inputs.description || ""}
            onChange={handleChange}
          />
          <label htmlFor="courses" className="d-block">
            Track courses
          </label>
          <input
            type="text"
            id="courses"
            name="courses"
            value={inputs.courses || ""}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-success mt-4">
            Add Track
          </button>
        </form>
      </div>
    </>
  );
};

export default ManageTracks;
