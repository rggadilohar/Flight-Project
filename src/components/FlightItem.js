import React from "react";
import "../styles/FlightItem.css";
import airIndiaLogo from "../images/air-india.png";
import indigoLogo from "../images/indigo.png";
import vistaraLogo from "../images/vistara.png";

const FlightItem = ({ flight }) => {
  const getAirlineLogo = (airline) => {
    if (airline === "Air India") {
      return airIndiaLogo;
    } else if (airline === "IndiGo") {
      return indigoLogo;
    } else if (airline === "Vistara") {
      return vistaraLogo;
    }
    return "";
  };

  return (
    <div className="flight-item">
      <div className="flight-item-info">
        <img src={getAirlineLogo(flight.airline)} alt={flight.airline} />
        <div>
          <div className="flight-airline">{flight.airline}</div>
          <div className="flight-time">
            Departure: {flight.departureTime} - Landing: {flight.landingTime}
          </div>
        </div>
      </div>
      <div className="flight-item-price">Price: {flight.oneWayPrice}</div>
      <div className="flight-item-stops">Stops: {flight.stops}</div>
      <button className="view-all-flights-btn">View All Flights</button>
    </div>
  );
};

export default FlightItem;
