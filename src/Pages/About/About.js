import React from 'react'
import './About.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
function About() {
  return (
    <>
    <Header/>
         {/* <!-- Header Section --> */}
    <section className="header-section">
        <div className="container">
            <h1>About Us</h1>
            <p>Discover the World with Us</p>
        </div>
    </section>

    {/* <!-- Introduction Section --> */}
    <section className="container mt-5">
        <div className="row">
            <div className="col-lg-6">
                <h2>Welcome to Our News Blog</h2>
                <p>We are a group of passionate travelers who love to explore the world and share our experiences. Our blog is dedicated to providing travel inspiration, tips, and guides to help you make the most of your journeys.</p>
            </div>
            <div className="col-lg-6">
                <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0" alt="Travel" className="img-fluid rounded"/>
            </div>
        </div>
    </section>

    {/* <!-- Mission Section --> */}
    <section className="mission-section">
        <div className="container">
            <div className="text-center">
                <h2>Our Mission</h2>
                <p>To inspire and empower people to explore new destinations, embrace different cultures, and create unforgettable memories through travel.</p>
            </div>
        </div>
    </section>

    {/* <!-- Team Section --> */}
    <section className="team-section">
        <div className="container">
            <div className="text-center">
                <h2>Meet the Team</h2>
                <p>Our passionate team of travelers and writers.</p>
            </div>
            <div className="row mt-4">
                <div className="col-lg-4">
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1" alt="Team Member" className="img-fluid"/>
                        <h5>John Doe</h5>
                        <p>Founder & Lead Writer</p>
                        <p><i className="fab fa-twitter"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i></p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6" alt="Team Member" className="img-fluid"/>
                        <h5>Jane Smith</h5>
                        <p>Travel Photographer</p>
                        <p><i className="fab fa-twitter"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i></p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img src="https://images.unsplash.com/photo-1500917293891-ef795e70e1f6" alt="Team Member" className="img-fluid"/>
                        <h5>Emma Brown</h5>
                        <p>Content Creator</p>
                        <p><i className="fab fa-twitter"></i> <i className="fab fa-instagram"></i> <i className="fab fa-linkedin"></i></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default About