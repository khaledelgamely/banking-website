import React from 'react'
import { clients } from "../constants";
import "../styles/clients.css"
const Clients = () => {
  return (
    <div className='clients' data-aos="fade-up">
    <div className="client">
      {clients.map((client) => (
        <div key={client.id} className="clientCont">
          <img src={client.logo} alt="client_logo" className="" />
        </div>
      ))}
    </div>
    </div>
  )
}

export default Clients