import React from 'react'
import { Navber } from './Navber'
import img16 from "../image/box-4-1.png"
import img17 from "../image/box-4-2.png"
import img18 from "../image/box-4-3.png"
import img19 from "../image/box-4-4.png"
import img20 from "../image/box-5-1.png"
import img21 from "../image/box-5-2.png"
import img22 from "../image/box-5-3.png"
import img23 from "../image/box-5-4.png"


export const HeartHealth = () => {
  return (
    <>
      <Navber />
      <div className="warpper">
      <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>HEART HEALTH</h1>
                        </div>
                        <div className="three"></div>
                    </div>
                    <div className="sec-j" >
                        <div className="sec-j-one">
                            <img src={img16} alt="" />
                            <hr />
                            <h2>Foley Catheter</h2>
                            <h3>$12.90</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-j-two" >
                            <img src={img17} alt="" />
                            <hr />
                            <h2>Thermometer</h2>
                            <h3>$8.98</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-j-three">
                            <img src={img18} alt="" />
                            <hr />
                            <h2>Non-rebrether-mask</h2>
                            <h3>$3.32</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-j-four">
                            <img src={img19} alt="" />
                            <hr />
                            <h2>Wound Dressing</h2>
                            <h3>$24.78</h3>
                            <button>Add to Card</button>
                        </div>
                    </div>
                    <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>Upcoming  Products</h1>
                        </div>
                        <div className="three"></div>
                    </div>

                    <div className="sec-s">
                        <div className="sec-s-one">
                            <img src={img20} alt="" />
                            <hr />
                            <h2>Foley Catheter</h2>
                            <h3>$12.90</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-s-two" >
                            <img src={img21} alt="" />
                            <hr />
                            <h2>Thermometer</h2>
                            <h3>$8.98</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-s-three">
                            <img src={img22} alt="" />
                            <hr />
                            <h2>Non-rebrether-mask</h2>
                            <h3>$3.32</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-s-four">
                            <img src={img23} alt="" />
                            <hr />
                            <h2>Wound Dressing</h2>
                            <h3>$24.78</h3>
                            <button>Add to Card</button>
                        </div>
                    </div>
      </div>
    </>
  )
}
