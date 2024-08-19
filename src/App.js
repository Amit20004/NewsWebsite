import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Pages/authentication/Login';
import SignUp from './Pages/authentication/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'semantic-ui-css/semantic.min.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ContactUs from './Pages/Contact/ContactUs';
import Bitcoin from './BlogPost/Bitcoin';
import TechCrunch from './BlogPost/TechCrunch';
import Domain from './BlogPost/Domain';
import PreLoader from './components/PreLoader/PreLoader';
import UserPannel from './Pannel/UserPannel';
import WalletPannel from './Pannel/WalletPannel';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., for fetching data)
    setTimeout(() => {
      setLoading(false); // Set loading to false after the content is loaded
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/bitcoinPost' element={<Bitcoin />} />
            <Route path='/techcrunchPost' element={<TechCrunch />} />
            <Route path='/domainPost' element={<Domain />} />
            <Route path='/contactUs' element={<ContactUs />} />
            <Route path='/profile' element={<UserPannel />} />
            <Route path='/wallet' element={<WalletPannel />} />
            <Route path='/userLogin' element={<Login />} />
            <Route path='/createUser' element={<SignUp />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
