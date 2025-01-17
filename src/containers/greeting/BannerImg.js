import lottie from 'lottie-web';
import React, {useRef,useEffect } from "react";
// import React, { Component } from "react";
// import banner from "./olumide.jpg"
// import "./Greeting.css";

//for animated svgs use json file
export default function BannerImg(){
    const container = useRef(null)
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
      loop: true,
       autoplay: true,
       animationData: require('./banner.json')
     })
  }, [])
   return (
      <div className="App">
        <div className="container" ref={container}></div>
     </div>
    );
}


 
