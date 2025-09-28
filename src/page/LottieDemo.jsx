// src/components/lottie/LottieDemo.jsx
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/groovyWalk.json";



const LottieDemo = () => (
  <div className="w-96 mx-auto">
    <Lottie animationData={groovyWalkAnimation} loop={true} />
  </div>
);

export default LottieDemo;
