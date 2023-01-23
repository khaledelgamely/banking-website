import React from 'react'
import "../styles/stats.css"
import { stats } from '../constants'

const Stats = () => {
    return (
        <div className='stats' data-aos="fade-up">
            {stats.map(state => (
                <div className='stats-cont' key={state.id}>
                    <p >{state.value}</p>
                    <p className='text-gradient'>{state.title}</p>
                </div>
            ))}
        </div>
    )
}

export default Stats