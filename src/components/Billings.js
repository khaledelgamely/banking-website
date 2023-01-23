import React from 'react'
import { apple, bill, google } from "../assets";
import "../styles/billing.css"


const Billings = () => {
    return (
        <div className='billings' data-aos="fade-up">
            <div className="billings-image">
                <img src={bill} alt="" />
            </div>
                <div className="billings-details">
                    <h1>Easily control your billing & invoicing</h1>
                    <p>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                    <div className="appNgoogle">
                        <img src={apple} alt="" />
                        <img src={google} alt="" />
                    </div>
            </div>
        </div>
    )
}

export default Billings