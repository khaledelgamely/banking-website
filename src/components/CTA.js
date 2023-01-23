import React from 'react'
import "../styles/cta.css"

const CTA = () => {
    return (
        <div className='cta bg-black-gradient-2'>
            <div className="cta-right">
                <h1>Let’s try our service now!</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <button className="bus-btn bg-blue-gradient" data-aos="fade-up">
                Get Started
            </button>
        </div>
    )
}

export default CTA