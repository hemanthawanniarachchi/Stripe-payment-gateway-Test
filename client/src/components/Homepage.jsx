import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div>
      <Link to='/payment'>Payment</Link>
      <br/>
      <Link to='/refund'>Refund</Link>

    </div>
  )
}

export default Homepage
