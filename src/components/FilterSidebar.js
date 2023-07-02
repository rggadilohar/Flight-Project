import React from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "../styles/FilterSidebar.css";

const FilterSidebar = ({ filters, onFilterChange, onResetFilters }) => {
  const handleFilterChange = (filterKey, value) => {
    if (filterKey === "popular") {
      const updatedFilters = { ...filters, popular: value };
      if (value) {
        updatedFilters.nonstop = false;
        updatedFilters.indigo = false;
        updatedFilters.vistara = false;
      }
      onFilterChange(updatedFilters);
    } else {
      onFilterChange({ ...filters, [filterKey]: value });
    }
  };

  return (
    <div className="filter-sidebar">
      <h2>Filters</h2>
      <div className="filter-group">
        <label>
          One Way Price:
          <InputRange
            minValue={0}
            maxValue={5000} // Adjust the maximum price range as needed
            step={100}
            value={filters.oneWayPrice || { min: 0, max: 5000 }}
            onChange={(value) => handleFilterChange("oneWayPrice", value)}
          />
        </label>
      </div>
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={filters.popular}
            onChange={(e) => handleFilterChange("popular", e.target.checked)}
          />
          Popular Flights
        </label>
      </div>
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={filters.nonstop}
            onChange={(e) => handleFilterChange("nonstop", e.target.checked)}
          />
          Nonstop ({/* Number of nonstop flights count */})
        </label>
      </div>
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={filters.indigo}
            onChange={(e) => handleFilterChange("indigo", e.target.checked)}
          />
          IndiGo ({/* Number of IndiGo flights count */})
        </label>
      </div>
      <div className="filter-group">
        <label>
          <input
            type="checkbox"
            checked={filters.vistara}
            onChange={(e) => handleFilterChange("vistara", e.target.checked)}
          />
          Vistara ({/* Number of Vistara flights count */})
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
