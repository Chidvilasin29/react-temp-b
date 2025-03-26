import React from 'react'
import { useState, useEffect } from "react";
export default function App9() {
  return (
    <div>
        <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Amount"
      ></input><br></br>
      <br></br>
       <input
        type="number"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter Amount"
      ></input>
    </div>
  )
}
