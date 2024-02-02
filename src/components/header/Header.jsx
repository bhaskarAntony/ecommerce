import React from 'react'
import './style.css'
import logo from '../../images/logo.jpg'

function Header() {
  return (
    <header className=' bg-white'>
      <nav class="navbar navbar-expand-md">
  <div class="container-fluid">
  <a class="nav-link mx-2" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
  <h1 className="fs-5 d-inline"><i className='bi bi-plus'></i>Contact us</h1>
</a>
    <img src={logo} alt="" width={80} className='mx-3' />

    <div class="collapse navbar-collapse d-none d-md-block" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
      
        <li class="nav-item">
          <a class="nav-link" href="#" tabindex="-1" >Categories</a>
        </li>
      </ul>
        
    </div>
    <button data-bs-toggle="offcanvas" className='menu' href="#menu" role="button" aria-controls="menu"><i className='bi bi-list'></i>Menu</button>
  </div>
</nav>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">CONTACT US</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className='mb-3'>
     <p className="d-flex gap-2 fw-bold"><i className='bi bi-phone'></i>CALL US +1.877.482.2430</p>
     <small className='small'>Our Client Advisors are available Monday through Saturday, 9:00AM - 11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding holidays.</small>
    </div>
    <div className='mb-3'>
     <p className="d-flex gap-2 fw-bold"><i className='bi bi-whatsapp'></i>WHATSAPP US
        </p>
     <small className='small'>Our Client Advisors are available to answer your WhatsApp messages Monday through Saturday, 9:00AM - 8:00PM EST, and Sunday 10:00AM – 7:00PM EST, excluding holidays.</small>
    </div>
    <div className='mb-3'>
     <p className="d-flex gap-2 fw-bold"><i className='bi bi-chat'></i>LIVE CHAT

        </p>
     <small className='small'>Our Client Advisors are available to chat Monday through Saturday, 9:00AM - 11:00PM (EST) and Sunday, 10:00AM - 9:00PM (EST), excluding holidays. The option to chat will become active during these hours once an advisor is available.</small>
    </div>
    <span className="fs-5 fw-bold">Do you need further assistance?</span>
    <a href="" className="mt-3 d-block">Get in Contact with Us</a>
  
  </div>
</div>


{/* menu  */}
<div class="offcanvas offcanvas-end" tabindex="-1" id="menu" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title fw-bold" id="offcanvasExampleLabel">CONTACT US</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">

    <ul type="none">
        <li className='fs-4'><a href="">Gifts</a></li>
        <li className='fs-4'><a href="">New in</a></li>
        <li className='fs-4'><a href="">Handbags</a></li>
        <li className='fs-4'><a href="">Travel</a></li>
        <li className='fs-4'><a href="">Women</a></li>
        <li className='fs-4'><a href="">Men</a></li>
        <li className='fs-4'><a href="">Children</a></li>
        <li className='fs-4'><a href="">Jewelry & watches</a></li>
        <li className='fs-4'><a href="">Jewelry & watches</a></li>
        <li className='fs-4'><a href="">Frangrances and Make-Up</a></li>
    </ul>
  
  </div>
</div>
    </header>
  )
}

export default Header