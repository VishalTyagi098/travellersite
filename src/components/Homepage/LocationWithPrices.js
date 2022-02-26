import "./LocationWithPrices.css";
import image from '../../images/locationwithprices.jpg'
import clock from '../../images/extra-clock.png'
import capacity from '../../images/extra-capacity.png'
import location from '../../images/extra-location.png'
import React from "react";
function LocationWithPrices() {
  return (
    <div className="locationwithprices-container">
      {/* column-1 contains only img */}
      <div className="locationwithprices-img">
        
      </div>

      {/* column-2 */}
      <div className="column-2">
        <div className="locationwithprices-title">Italy</div>
        <div className="locationwithprices-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
        <div className="locationwithprices-extra">
          <div className="extra-stay">
            <img src={clock} alt="" />7D/6N
            </div>
          <div className="extra-capacity">
            <img src={capacity} alt="" /> 10 max</div>
          <div className="extra-location">
          <img src={location} alt="" />malaysia</div>
        </div>
      </div>

      {/* column-3 */}
      <div className="column-3">
        <div className="loactionwithprices-prices">prices</div>
        <div className="locationwithprices-reserve">
          <div className="reserve-title">Current price</div>
          <div className="reserve-price">$450</div>
          <div className="reserve-btn">
            <button>Reserve</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationWithPrices;
