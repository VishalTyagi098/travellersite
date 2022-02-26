import React from "react";
import LocationWithoutPrices from "./LocationWithoutPrices";
import './PopularLocation.css'

function PopularLocation() {
  return (
    <div className="popularlocation-container">
      <div className="popularlocation-title">
        CHECKOUT OUR PACKAGES
      </div>
      <div className="popularlocation-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorem?
      </div>
      <div className="container">
        <div className="container-child">
          <LocationWithoutPrices />
        </div>
        <div className="container-child">
          <LocationWithoutPrices />
        </div>
        <div className="container-child">
          <LocationWithoutPrices />
        </div>
        
      </div>
    </div>
  );
}

export default PopularLocation;
