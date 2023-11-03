import React from 'react'
import logo from './brand_logo.png'

const Header = () => {
  return (
    <div>

   
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid " >
    <a className="navbar-brand px-5"  href="#"><img src={logo} className='img-fluid' ></img></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav "style={{marginLeft:"30%" ,paddingRight:"95%",fontSize:"1.1rem",fontWeight:"400"}} >
      <li className="nav-item">
          <a  className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/menu">Menu</a>
        </li>
     
        <li className="nav-item">
          <a  className="nav-link" href="/location">Location</a>
        </li>
        <li className="nav-item">
          <a  className="nav-link" href="/about">About</a>
        </li> <li className="nav-item">
          <a className="nav-link" href="/contact">Contact</a>
        </li>
     
      </ul>
      
    </div>
    
  </div>
 
</nav>

</div>
  )
}

export default Header
