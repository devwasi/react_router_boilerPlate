import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
    <div>
        <h1>
            This is about Page
        </h1>
        <button onClick={()=>navigate("/")}>
            goto Home
        </button>
    </div>
  )
}

export default About