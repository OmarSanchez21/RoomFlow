import React from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='Navbar'>
        <span className='logo'>RoomFlow</span>
        <div className={`items ${isOpen ? "open" : ""}`}>
            <a href='/Home'>Home</a>
            <a href='/login'>Login</a>
            <a href='/register'>Register</a>
            <a href='/lab'>Lab</a>
        </div>
        <div 
        className={`toggle ${isOpen ? "open" : ""}`}
         onClick={() => setIsOpen(!isOpen)}> 
          <div className='bar'></div>
        </div>
        </div>
  )
}

export default Navbar;