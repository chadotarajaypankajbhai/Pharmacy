import React from 'react'
import { Navber } from './Navber'
import img2 from "../image/box-1.png"
import img3 from "../image/box-1-2.png"
import img4 from "../image/box-1-3.png"
import img5 from "../image/box-1-4.png"
import img6 from "../image/box-2.png"
import img7 from "../image/box-2-1.png"
import img8 from "../image/box-2-3.png"
import img9 from "../image/box-2-4.png"

export const FirstAid = () => {
  return (
    <>
      <Navber />
      
      <div className="warpper">
        <div className="sec-g">
          <div className="one"></div>
          <div className="two">
            <h1>FIRST AID</h1>
          </div>
          <div className="three"></div>

        </div>
        <div className="sec-b">
          <div className="sec-b-one" >
            <img src={img2} alt="" />
            <hr />
            <h2>Foley Catheter</h2>
            <h3>$12.90</h3>
            <button>Add to Card</button>
          </div>
          <div className="sec-b-two" >
            <img src={img3} alt="" />
            <hr />
            <h2>Thermometer</h2>
            <h3>$8.98</h3>
            <button>Add to Card</button>
          </div>
          <div className="sec-b-three">
            <img src={img4} alt="" />
            <hr />
            <h2>Non-rebrether-mask</h2>
            <h3>$3.32</h3>
            <button>Add to Card</button>
          </div>
          <div className="sec-b-four">
            <img src={img5} alt="" />
            <hr />
            <h2>Wound Dressing</h2>
            <h3>$24.78</h3>
            <button>Add to Card</button>
          </div>
        </div>
        <div className="sec-g">
          <div className="one"></div>
          <div className="two">
            <h1>Popular Products</h1>
          </div>
          <div className="three"></div>

        </div>

        <div className="sec-d">
          <div className="sec-d-one">
            <img src={img6} alt="" />
            <hr />
            <h2>Oxygen Mask</h2>
            <h3>$2.00</h3>
            <button>Add to Card</button>
          </div>
          <div className="sec-d-two" >
            <img src={img7} alt="" />
            <hr />
            <h2>Surgincal Gloves</h2>
            <h3>$1.99</h3>
            <button>Add to Card</button>
          </div>
          <div className="sec-d-three">
            <img src={img8} alt="" />
            <hr />
            <h2>Medical-Mask</h2>
            <h3>$.89</h3>
            <button>Add to Card</button>
          </div>
          <div className="sec-d-four">
            <img src={img9} alt="" />
            <hr />
            <h2>Hand Sanitizer</h2>
            <h3>$4.00</h3>
            <button>Add to Card</button>
          </div>
        </div>
      </div>
    </>
  )
}
