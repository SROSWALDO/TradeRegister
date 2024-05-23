import React, { useState } from "react";
import camion from "../../assets/camion.png";
import Navbar from "../Navbar/Navbar";
import About from "../About/About";
import { NavLink } from "react-router-dom";

export default function Landing() {

  const [showNewComponent, setShowNewComponent] = useState(false);
  const [animation, setAnimation] = useState('');

  const handleButtonClick = () => {
    if (showNewComponent) {
      setAnimation('animate-fadeOut');
      setTimeout(() => {
        setShowNewComponent(false);
        setAnimation('');
      }, 500); // Duración de la animación
    } else {
      setShowNewComponent(true);
      setAnimation('animate-fadeIn');
    }
  };

  return (
    <div className="relative w-full h-[100vh]">
      
      <div className="absolute inset-0 bg-background-home bg-cover">

      

        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative z-10">
        <Navbar  onButtonClick={handleButtonClick}/>

        
        <div className="absolute top-64 left-10 text-white  ">
          <h2 className="text-4xl mb-2">
            Palacios Inc: Your Logistics Partner
          </h2>
          <p className="w-[480px] text-xl ">
            Palacios Inc delivers efficient and reliable logistics solutions,
            ensuring your goods reach their destination safely and on time.
            Experience seamless transportation with Palacios Inc.
          </p>

          <button class="cta flex mt-20 ">
            <NavLink to="/home" >
            <span class="hover-underline-animation text-white "> Enter Now </span>
            </NavLink>
            <svg
            className="mt-1  "
              id="arrow-horizontal"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="10"
              viewBox="0 0 46 16"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                transform="translate(30)"
                fill="#FFFFFF"
              ></path>
            </svg>
          </button>

          

          

        </div>
        
      </div>
      {showNewComponent && (
            <div className={`absolute bottom-2 right-2 ${animation}`}> 
              <About />
            </div>
          )}
    </div>
  );
}
