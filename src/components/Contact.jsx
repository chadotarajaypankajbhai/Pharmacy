import React from 'react'
import { Navber } from './Navber'

export const Contact = () => {
  return (
    <>
      <Navber />
      <div className="contact">
        <h1>LOGIN FORM</h1>

        <form>
          <input type="text" placeholder='ENTER YOUR NAME' /><br />
          <input type="email" placeholder='ENTER YOUR EMAIL' /><br />
          <input type="number" name="number" placeholder='ENTER YOUR NUMBER' /><br />
          <textarea name="Address" placeholder='ENTER TOUR ADDRESS'></textarea><br />
          <button>SUBMIT</button>
        </form>
      </div>
      <div className="contact-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.0035246995!2d73.00827044332871!3d22.322336995982667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1729102817926!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <footer>
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
      </footer>
    </>
  )
}
