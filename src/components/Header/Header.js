import React from "react";
import { Link } from "react-router-dom";
import './Header.css';


function Header() {
  const blogLink = document.getElementById("blogLink");
  const search = document.getElementById("search");
  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userEmail");
    window.location.href = '/';
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ background: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)", boxShadow: "0 5px 20px #c7c9c8" }}>
        <div className="container-fluid">
          <a className="navbar-brand fs-3 mx-3" href="/" style={{ color: "white" }}>
            <img style={{ width: "100px" }} src="https://upload.wikimedia.org/wikipedia/en/0/02/DotBlog_domain_logo.png" alt="..." />
          </a>
          <button className="navbar-toggler" style={{ background: "white" }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px' }}>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "white" }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{ color: "white" }}>About Us</Link>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link"  style={{ color: "white" }} id="blogLink">Blog Posts</Link> */}
                <div className="dropdown">
                  <Link to="#" className="dropdown-link nav-link text-white">Blog Post <i class="fa-solid fa-caret-down"></i></Link>
                  <div class="dropdown-content">
                    <p><Link className="nav-link text-black post-link" style={{ color: "white" }} id="blogLink" to={'/bitcoinPost'}>Bitcoin</Link></p>
                    <p><Link className="nav-link text-black post-link" style={{ color: "white" }} id="blogLink" to={'/techcrunchPost'}>TechCrunch</Link></p>
                    <p><Link className="nav-link text-black post-link" style={{ color: "white" }} id="blogLink" to={'/domainPost'}>Domain News</Link></p>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contactUs" style={{ color: "white" }}>Contact Us</Link>
              </li>
            </ul>
            {
              (!localStorage.getItem("token")) ?

                <>
                  <Link className="nav-link btnauth bg-white text-danger mx-1" to="/userLogin" style={{ color: "white", padding: "10px 12px", fontWeight: "500" }}>LogIn</Link>
                  <Link className="nav-link btnauth bg-white text-danger mx-1" to="/createUser" style={{ color: "white", padding: "10px 12px" }}>SignUp</Link>
                </>
                :

                <div className='d-flex'>
                  <div className="btn-group dropstart">
                    <button type="button" className="btn bg-white" data-bs-toggle="dropdown" aria-expanded="false" style={{ borderRadius: '50%', width: "35px", height: "35px" }}>
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                    <ul className="dropdown-menu">
                      <li className="text-start p-2">
                      <Link to={'/profile'}><i class="fa-solid fa-user"></i> MyProfile</Link>
                      </li>
                      <li className="text-start p-2">
                      <Link to={'/wallet'}><i class="fa-solid fa-wallet"></i> Wallet</Link>
                      </li>
                      <li className="text-start p-2">
                      <Link onClick={handleLogOut}><i class="fa-solid fa-right-from-bracket"></i> LogOut</Link>
                      </li>
                    </ul>
                  </div>
                </div>

            }
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
