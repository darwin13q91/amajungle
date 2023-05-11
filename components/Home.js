import React from 'react';
import { useSpring, animated } from 'react-spring';
import '../styles/Home.css';

function Home() {
  const fadeAnim = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });
  const slideAnim = useSpring({ transform: 'translate3d(0,0,0)', from: { transform: 'translate3d(0,-50px,0)' }, delay: 1000 });

  return (
    <div className="home">
      <animated.h1 style={fadeAnim} className="home-title">Maximizing Your Amazon Sales</animated.h1>
      <animated.p style={slideAnim} className="home-slogan">Welcome to Amajungle Consultant - we help businesses navigate the modern jungle of Amazon and maximize their sales.</animated.p>
      <div className="home-features">
        <div className="home-feature">
          <i className="fas fa-truck"></i>
          <h3>Fast Shipping</h3>
          <p>Our Amazon experts can help you optimize your shipping process to ensure fast and reliable delivery to your customers.</p>
        </div>
        <div className="home-feature">
          <i className="fas fa-headset"></i>
          <h3>Excellent Customer Service</h3>
          <p>We understand the importance of providing excellent customer service on Amazon. Let us help you improve your ratings and reviews.</p>
        </div>
        <div className="home-feature">
          <i className="fas fa-chart-bar"></i>
          <h3>Data-Driven Strategy</h3>
          <p>Our team uses advanced analytics and data-driven insights to help you make informed decisions and maximize your sales on Amazon.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
