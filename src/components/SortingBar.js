import React from "react";
import "../styles/SortingBar.css";

const SortingBar = ({ sorting, onSortingChange }) => {
  const handleSortingChange = (event) => {
    const { value } = event.target;
    onSortingChange(value);
  };

  return (
    <div className="sorting-bar">
      <label>
        Sort By:
        <select value={sorting} onChange={handleSortingChange}>
          <option value="popular">Popular Flights</option>
          <option value="price">One Way Price</option>
          <option value="stopsFromPune">Stops from Pune</option>
          <option value="departureTime">Departure Time</option>
        </select>
      </label>
    </div>
  );
};

export default SortingBar;
