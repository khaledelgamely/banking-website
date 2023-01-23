        import React from 'react'
import "../styles/testimonial.css"
import { quotes } from "../assets";
import { feedback } from "../constants";
const Testimonial = () => {
    return (
        <div className='testimonial' data-aos = "fade-up">
            <div className="testimonial-front">
                <h1>What People are saying about us</h1>
                <p>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
            </div>
            <div className="testimonial-under" data-aos = "fade-up">
                {feedback.map(item => (
                    <div className="cart feedback-card">
                        <img src={quotes} alt=""  className='quote'/>
                        <p className='cartContent'>{item.content}</p>
                        <div className="cartId">
                            <img src={item.img} alt="" />
                            <div className="cart-title">
                                <p>{item.name}</p>
                                <p>{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Testimonial