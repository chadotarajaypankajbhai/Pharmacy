import React from 'react'
import { Navber } from './Navber'
import img1 from "../image/doc.png"
// import img2 from "../image/box-1.png"
// import img3 from "../image/box-1-2.png"
// import img4 from "../image/box-1-3.png"
// import img5 from "../image/box-1-4.png"
// import img6 from "../image/box-2.png"
// import img7 from "../image/box-2-1.png"
// import img8 from "../image/box-2-3.png"
// import img9 from "../image/box-2-4.png"
// import img10 from "../image/itam-1.png"
// import img11 from "../image/itam-2.png"
import img12 from "../image/box-3-1.png"
import img13 from "../image/box-3-2.png"
import img14 from "../image/box-3-3.png"
import img15 from "../image/box-3-4.png"
// import img16 from "../image/box-4-1.png"
// import img17 from "../image/box-4-2.png"
// import img18 from "../image/box-4-3.png"
// import img19 from "../image/box-4-4.png"
// import img20 from "../image/box-5-1.png"
// import img21 from "../image/box-5-2.png"
// import img22 from "../image/box-5-3.png"
// import img23 from "../image/box-5-4.png"
// import img24 from "../image/dava.png"


export const PainRelief = () => {
    return (
        <>
            <Navber />
            <header>
                <div className="hea-a">
                    <div className="hea-a-left">
                        <h1>Your Prescription For
                        Affordable Health</h1>
                        <h1>Solutions !</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, in! Deserunt neque quibusdam, numquam hic impedit at eius ut voluptates?</p>
                        <button>Start Shopping <i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                    <div className="hea-a-right">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="warpper">
                    <div className="hea-b">
                        <div className="hea-b-one">
                            <div className="hea-b-one-left">
                                <i class="fa-solid fa-medal"></i>
                            </div>
                            <div className="hea-b-one-right">
                                <h1>Get 25%</h1>
                                <h1>OFF</h1>
                            </div>
                        </div>
                        <div className="hea-b-two">
                            <div className="hea-b-one-left">
                                <i class="fa-solid fa-truck"></i>
                            </div>
                            <div className="hea-b-one-right">
                                <h1>Free Home</h1>
                                <h1>Delivery</h1>
                            </div>
                        </div>
                        <div className="hea-b-three">
                            <div className="hea-b-one-left">
                                <i class="fa-solid fa-user-doctor"></i>
                            </div>
                            <div className="hea-b-one-right">
                                <h1>Doctor</h1>
                                <h1>Appointtemt</h1>
                            </div>
                        </div>
                        <div className="hea-b-four">
                            <div className="hea-b-one-left">
                                <i class="fa-solid fa-stethoscope"></i>
                            </div>
                            <div className="hea-b-one-right">
                                <h1>Health</h1>
                                <h1>Advice</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section>
            {/* <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>New Products</h1>
                        </div>
                        <div className="three"></div>

                    </div> */}
                <div className="warpper">
                    {/* <div className="sec-b">
                        <div className="sec-b-one">
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
                    </div> */}
                    {/* <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>Popular Products</h1>
                        </div>
                        <div className="three"></div>

                    </div> */}

                    {/* <div className="sec-d">
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
                    </div> */}

                    {/* <div className="sec-e">
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
                    </div> */}


                    {/* <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>TOP PRODUCTS</h1>
                        </div>
                        <div className="three"></div>
                    </div>
                    <div className="sec-l">
                        <div className="sec-l-one">
                            <img src={img12} alt="" />
                            <hr />
                            <h2>Foley Catheter</h2>
                            <h3>$12.90</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-l-two" >
                            <img src={img13} alt="" />
                            <hr />
                            <h2>Thermometer</h2>
                            <h3>$8.98</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-l-three">
                            <img src={img14} alt="" />
                            <hr />
                            <h2>Non-rebrether-mask</h2>
                            <h3>$3.32</h3>
                            <button>Add to Card</button>
                        </div>
                        <div className="sec-l-four">
                            <img src={img15} alt="" />
                            <hr />
                            <h2>Wound Dressing</h2>
                            <h3>$24.78</h3>
                            <button>Add to Card</button>
                        </div>
                    </div> */}
                    <div className="sec-k">
                        <div className="sec-k-one">
                            <div className="sec-k-one-left">
                               <h2> Order Completed</h2>
                            </div>
                            <div className="sec-k-one-right">
                                <h1>14K</h1>
                            </div>
                        </div>
                        <div className="sec-k-two">
                        <div className="sec-k-two-left">
                               <h2> Won Awards</h2>
                            </div>
                            <div className="sec-k-two-right">
                                <h1>250K</h1>
                            </div>
                        </div>
                        <div className="sec-k-three">
                        <div className="sec-k-three-left">
                               <h2> Happy  Customers</h2>
                            </div>
                            <div className="sec-k-three-right">
                                <h1>8K</h1>
                            </div>
                        </div>
                        <div className="sec-k-four">
                        <div className="sec-k-four-left">
                               <h2> Positive Reviews</h2>
                            </div>
                            <div className="sec-k-four-right">
                                <h1>12K</h1>
                            </div>
                        </div>
                    </div>


                    {/* <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>Medical Products</h1>
                        </div>
                        <div className="three"></div>
                    </div> */}
                    {/* <div className="sec-j">
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
                    </div> */}
                    {/* <div className="sec-g">
                        <div className="one"></div>
                        <div className="two">
                            <h1>Upcoming  Products</h1>
                        </div>
                        <div className="three"></div>
                    </div> */}

                    {/* <div className="sec-s">
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
                        </div> */}
                    {/* </div> */}
                    {/* <div className="sec-u">
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
                    </div> */}
                </div>
            </section>
            {/* <footer>
                <div className="foo-a">
                    <div className="foo-a-one">
                        <h1>Contact</h1>
                        <div className="foo-b">
                        <i class="fa-solid fa-location-dot"></i>
                        <h2>123 road, dhaka Ahmdavad.</h2>
                        </div>
                        <div className="foo-c">
                        <i class="fa-solid fa-phone"></i>
                        <h2>+91 0123456789</h2>
                        </div>
                        <div className="foo-d">
                        <i class="fa-solid fa-envelope"></i>
                        <h2>demo@gamil.com</h2>
                        </div>
                    </div>
                    <div className="foo-a-two">
                        <h1>Quick Links</h1>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Service</a>
                        <a href="">Careers</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="foo-a-three">
                        <h1>Specialties</h1>
                        <a href="">Anesthesiology</a>
                        <a href="">Psychiatry</a>
                        <a href="">General Surgery</a>
                        <a href="">Family Medicine</a>
                        <a href="">Pediatrics</a>
                    </div>
                    <div className="foo-a-four">
                        <h1>Services</h1>
                        <a href="">Medical</a>
                        <a href="">Operation</a>
                        <a href="">Laboratory</a>
                        <a href="">ICU</a>
                        <a href="">Patient Ward</a>
                    </div>
                </div>
                <hr />
                <div className="foo-e">
                    <h3>@2023 HEALTHY.All right reserved.</h3>
                </div>
            </footer> */}
        </>
    )
}
