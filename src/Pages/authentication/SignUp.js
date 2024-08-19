import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from '../../components/Header/Header'
// import Footer from '../../components/footer/Footer';
function SignUp() {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional: Add a simple frontend validation
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // Await the response from the server
      const response = await axios.post("http://localhost:8005/api/createUser", {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      });

      // Check if the response indicates success
      if (response.status===200) {
        alert("Sign-up successful");
        // Redirect the user to the login page
        window.location.href = "/userLogin";
      }
    } catch (error) {
      // Enhanced error handling
      if (error.response) {
        if (error.response.status === 400) {
          alert("This email is already registered. Please log in or use a different email.");
          console.log(error.response)
        } else {
          alert("Sign-up failed due to invalid credentials. Please try again.");
        }
      } else {
        alert("An unexpected error occurred. Please try again later.");
      }
    }
  }


  return (
<>
<Header/>
<section className="h-auto" >
  <div className="container-fluid h-100" style={{width:"100%"}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="text-black">
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form className="mx-1 mx-md-4"  onSubmit={handleSubmit}>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" className="form-control" name='name' value={credentials.name} onChange={handleChange} required/>
                      <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" className="form-control" name="email" value={credentials.email} onChange={handleChange} required />
                      <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" className="form-control" name='password' value={credentials.password} onChange={handleChange} required/>
                      <label className="form-label" htmlFor="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div data-mdb-input-init className="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" className="form-control" name='confirmPassword' value={credentials.confirmPassword} onChange={handleChange} required/>
                      <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required />
                    <label className="form-check-label" htmlFor="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Register</button>
                    
                    <Link className="link-danger p-3 fw-bold" to={'/userLogin'}>Already a User?</Link>
                    
                    
                  </div>

                </form>

              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  className="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <Footer/> */}
</>  )
}

export default SignUp