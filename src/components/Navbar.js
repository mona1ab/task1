import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {
  return (
    <div className='navbar-container'>
        <ul className='navbar'>
            <li className='navbar-item'>
            <Link to="/HomePage" className='navbar-link'>Todo List</Link>
            </li>
            <li>
                <Link to="/AddToDoPge" className='navbar-link'>Add Todo</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar