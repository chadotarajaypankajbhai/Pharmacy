import React from 'react'
import { Navber } from './Navber'
import img10 from "../image/itam-1.png"
import img11 from "../image/itam-2.png"
import img24 from "../image/dava.png"

export const SkinCare = () => {
  return (
    <>
      <Navber />
      <div className="warpper">
        <div className="sec-g">
          <div className="one"></div>
          <div className="two">
            <h1>SKIN CARE</h1>
          </div>
          <div className="three"></div>
        </div>
        <div className="sec-e">
          <div className="sec-e-left">
            <div className="sec-e-left-top">
              <button>25% OFF</button>
              <h1>BLACK GARLIC OIL</h1>
              <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, recusandae.</h3>
              <h2>$ 37.00</h2>
            </div>
            <div className="sec-e-left-bom">
              <img src={img10} alt="" />
            </div>
          </div>
          <div className="sec-e-right">
            <div className="sec-e-right-top">
              <div className="sec-f-one">
                <button>25% OFF</button>
                <h1>Denatal Care Set for Vivid and Bright Smlies</h1>
                <h2>$22.90</h2>
              </div>
              <div className="sec-f-two">
                <img src={img11} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="sec-u">
                        <div className="sec-u-left">
                            <h5>Today Hot Offer</h5>
                            <h1>Unlock 50% Off on </h1>
                            <h1>Essential Medicines!</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima assumenda dicta explicabo sequi suscipit, aliquid ipsa quia obcaecati deserunt quaerat?</p>
                            <button>Place an Order Now </button>
                        </div>
                        <div className="sec-u-right">
                            <img src={img24} alt="" />
                        </div>
                    </div>
      </div>

    </>
  )
}
