import React from "react";
// import { Link } from "react-router-dom";
import '../styles/Navbars.css'

export default function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary   text-content">

      <div className="container">

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars" style={{color:"white"}}></i>
        </button>

          <a className="navbar-brand " href="/About" style={{color:"green"}}>
             HOMEMA
          </a>

         <div className="collapse navbar-collapse " id="navbarTogglerDemo03">

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item">

                  <a className="nav-link active " aria-current="page" href="/">
                    หน้าแรก
                  </a>
              
                </li> 

                {/* <li className="nav-item">

                  <a className="nav-link " href="/forum">
                    ตั้งกระทู้
                  </a>
                  
                </li>  */}

                <li className="nav-item">

                  <a className="nav-link " href="/About">
                    เข้าสู่ระบบ / สมัครสมาชิก 
                  </a>
                  
                </li> 
              </ul>

                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>

                </form>

        </div>
      </div>
    </nav>
  );
}
