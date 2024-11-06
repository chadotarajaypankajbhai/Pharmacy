import React from 'react'
import { Link } from 'react-router-dom'
import "./Navber.css"
import img from "../image/Logo.png"

export const Navber = () => {
    return (
        <>
            <div className="main">
                <div className="main-left">
                    <img src={img} alt="" />
                </div>
                <div className="main-right">
                    <Link to="/" className='jay'>PainRelief</Link>
                    <Link to="/FirstAid" className='jay'>FirstAid</Link>
                    <Link to="/HeartHealth" className='jay'>HeartHealth</Link>
                    <Link to="/SkinCare" className='jay'>SkinCare</Link>
                    <Link to="/Contact" className='jay'>Contact</Link>
                </div>
            </div>

        </>
    )
}
