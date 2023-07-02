import React, { useState } from "react";
import FlightItem from "./FlightItem";
import FilterSidebar from "./FilterSidebar";
import SortingBar from "./SortingBar";
import flightsData from "../data/Flights";
import "../styles/FlightSearchResult.css";

const FlightSearchResult = () => {
  const [filters, setFilters] = useState({
    oneWayPrice: { min: 0, max: 5000 },
    popular: false,
    nonstop: false,
    indigo: false,
    vistara: false,
  });

  const [sorting, setSorting] = useState("popular");

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
  };

  const handleSortingChange = (value) => {
    setSorting(value);
  };

  const resetFilters = () => {
    setFilters({
      oneWayPrice: { min: 0, max: 5000 },
      popular: false,
      nonstop: false,
      indigo: false,
      vistara: false,
    });
  };

  // Apply filters to the flights data
  let filteredFlights = flightsData;
  if (filters.oneWayPrice) {
    filteredFlights = filteredFlights.filter(
      (flight) =>
        flight.oneWayPrice >= filters.oneWayPrice.min &&
        flight.oneWayPrice <= filters.oneWayPrice.max
    );
  }
  if (filters.popular) {
    // Apply popular flights filter
    filteredFlights = filteredFlights.filter((flight) => flight.popular);
  }
  if (filters.nonstop) {
    // Apply nonstop flights filter
    filteredFlights = filteredFlights.filter((flight) => flight.stops === 0);
  }
  if (filters.indigo) {
    // Apply IndiGo flights filter
    filteredFlights = filteredFlights.filter(
      (flight) => flight.airline === "IndiGo"
    );
  }
  if (filters.vistara) {
    // Apply Vistara flights filter
    filteredFlights = filteredFlights.filter(
      (flight) => flight.airline === "Vistara"
    );
  }

  // Sort filtered flights based on sorting criteria
  if (sorting === "popular") {
    filteredFlights.sort((a, b) => b.popularity - a.popularity);
  } else if (sorting === "price") {
    filteredFlights.sort((a, b) => a.oneWayPrice - b.oneWayPrice);
  } else if (sorting === "stopsFromPune") {
    filteredFlights.sort((a, b) => a.stopsFromPune - b.stopsFromPune);
  } else if (sorting === "departureTime") {
    filteredFlights.sort(
      (a, b) => new Date(a.departureTime) - new Date(b.departureTime)
    );
  }

  return (
    <div className="flight-search-result">
      <FilterSidebar
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={resetFilters}
      />
      <div className="flight-result-container">
        <SortingBar sorting={sorting} onSortingChange={handleSortingChange} />
        <div className="flight-list">
          {filteredFlights.map((flight) => (
            <FlightItem key={flight.id} flight={flight} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchResult;
