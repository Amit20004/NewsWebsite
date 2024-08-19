import React, { useState,useEffect } from 'react'
import './Wallet.css'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
function WalletPannel() {

  const coins=localStorage.getItem("userWallet")
const handleWithdraw=()=>{
  const currentCIN=parseInt(coins)
  if(currentCIN>=10){
    localStorage.setItem("userWallet",currentCIN-currentCIN)
    document.getElementById("cinAmount").innerText=currentCIN-10
    alert("CIN withdrawn successfully");
    window.location.href='/';
  }else{
    alert("Insufficient CIN")
    window.location.href='/';

  }
  
 
}
  return (
    <>
    <Header/>
    <div className="container-fluid wallet-page mt-5">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card wallet-card">
          <h2 className="card-title">Your Digital Wallet</h2>
          <p className="wallet-balance">CIN Earned: <span id="cinAmount">{coins}</span></p>
          <p className="wallet-text">Secure and manage your earnings with ease. Your digital wallet ensures safety and flexibility.</p>
          <button className="btn btn-success" onClick={handleWithdraw}>Withdraw CIN</button>
          <img src="https://img.freepik.com/free-photo/3d-illustration-wallet-with-coins-credit-cards_107791-16572.jpg?t=st=1723999196~exp=1724002796~hmac=a44965d72cd426c24e6ebf7a38273d8fed30c7d02b38437d86f4dbf195cb8bd7&w=740" alt="Wallet Image"  className="wallet-image"/>
        </div>
      </div>
    </div>
  </div>

  <Footer/>

    </>
  )
}

export default WalletPannel