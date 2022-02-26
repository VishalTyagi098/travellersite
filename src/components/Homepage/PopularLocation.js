import React from "react";
import LocationWithoutPrices from "./LocationWithoutPrices";
import './PopularLocation.css'

function PopularLocation() {
  return (
    <div className="popularlocation-container">
      popular locations
      <div className="container">
        <LocationWithoutPrices />
        <LocationWithoutPrices />
        <LocationWithoutPrices />
      </div>
    </div>
  );
}

export default PopularLocation;
