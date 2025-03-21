import React from 'react';
import "./App8.css"
export default function App8() {
  return (
    <div>
      <div>
        <div className="col">
        <p>React store</p>
        <div>
            <a href="#">Home|</a>
            <a href="#">Login|</a>
            <a href="#">Cart</a>
            </div>
        </div>
      <div>
        <h3>Registration Form</h3>
        <p><input type="name" placeholder="Enter name" /></p>
        <p><input type="email" placeholder="Email address" /></p>
        <p><input type="password" placeholder="New Password" /></p>
        <p><button className="btn">Submit</button></p>
        <p>Already a member? <a href="login">Login</a>
      </p>
        <p>@Copyright 2025.All rights reserved.</p>
      </div>
    </div>
    </div>
  );
}