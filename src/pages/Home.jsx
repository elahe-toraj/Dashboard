import React from 'react';
import './Home.css';
import { FaCreditCard, FaClock, FaMoneyBillWave } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <div className="info-cards">
        <div className="info-card">
          <FaCreditCard className="icon" />
          <div className="text">
            <h3>شماره کارت</h3>
            <p>6037 9911 1234 5678</p>
          </div>
        </div>

        <div className="info-card">
          <FaClock className="icon" />
          <div className="text">
            <h3>ساعت کاری این ماه</h3>
            <p>168 ساعت</p>
          </div>
        </div>

        <div className="info-card">
          <FaMoneyBillWave className="icon" />
          <div className="text">
            <h3>حقوق این ماه</h3>
            <p>۱۲,۵۰۰,۰۰۰ تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
