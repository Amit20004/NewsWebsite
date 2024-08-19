import React, { useState } from 'react'
import './ContactUs.css'
import axios from 'axios'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
function ContactUs() {

    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8005/api/contactUs", {
                name: credentials.name,
                email: credentials.email,
                message: credentials.message
            });
            // Check if the response indicates success
            if (response.status === 200) {
                alert("Message send successfully");
            }
        }
        catch (error) {
            console.error("failed to sen the message: ", error);
          }
    }
    return (
        <>
            <Header />
            <div className="container contact-us p-6">
                <div className="row p-5">
                    <div className="col-lg-6">
                        <h2>Contact Us</h2>
                        <p>If you have any questions, feel free to reach out to us. We are here to help!</p>
                        <div className="contact-info">
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-map-marker-alt"></i>
                                <p>123 Main Street, Anytown, USA</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-phone"></i>
                                <p>+1 (234) 567-890</p>
                            </div>
                            <div className="d-flex align-items-center mb-3">
                                <i className="fas fa-envelope"></i>
                                <p>info@example.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="contact-form">
                            <h4>Send Us a Message</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" required name='name' value={credentials.name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Your Email" required name='email' value={credentials.email} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required name='message' value={credentials.message} onChange={handleChange}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs