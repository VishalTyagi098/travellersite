import LocationWithPrices from './LocationWithPrices'
import './MainLocation.css'
import React from 'react'

function MainLocation() {
  return (
    <div>
      <div className="mainlocation-title">
        CHECKOUT OUR PACKAGES
      </div>
      <div className="mainlocation-para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolorem?
      </div>
      <div className="mainlocation-container">
        <div className="mainlocation-location">
          <LocationWithPrices/>
        </div>
        <div className="mainlocation-location">
          <LocationWithPrices/>
        </div>
        <div className="mainlocation-location">
          <LocationWithPrices/>
        </div>
        <div className="mainlocation-location">
          <LocationWithPrices/>
        </div>
        
      </div>
      
    </div>
    
  )
}

export default MainLocation