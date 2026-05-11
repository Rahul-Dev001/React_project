import React from 'react'
import logo from '../assets/logo.png'
import { useEffect, useState } from "react";

function Navbar2(){

//   const [sticky,setSticky] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near top
      if(currentScrollY == 0){
        setVisible(false);
      }
      
        
      
      if (currentScrollY < 120) {
        setShowNavbar(true);
        
      }
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Show when scrolling up
      else {
        setShowNavbar(true);
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  let top;
//   top = -lastScrollY
  {lastScrollY <=120 ? top = -lastScrollY : top = -120 }



 return<>

        {/* <------dynamic navbar--------> */}
    <nav className={`
          fixed
          top-0
          ${showNavbar ? "translate-y-[0]" : "translate-y-[-120px]"}
          ${visible ? "" : "hidden"} 
          
          w-full
          z-50
          bg-white
          transition-transform
          duration-300
          ease-in-out
         
        `}>
        
                <div className='flex justify-between pt-5 pl-5 pr-10 pb-3 '>
                    <div className='flex justify-between  gap-10'>
        
                        <div className='w-[200px] h-[88px] overflow-clip relative'>
                            <img className='object-cover absolute top-[-10px]' src={logo} alt="logo"/>
                        </div >
                        <ul className='flex justify-center gap-[30px] pt-10'>
                            <li>Shop Now</li>
                            <li>New Arrivals</li>
                            <li>Contact</li>
                            <li>Meme Merch</li>
                        </ul>
        
                    </div>
                    <div className='pt-10'>
                        Search pannel
                    </div>
                </div>
    </nav> 


       {/*  <------static navbar--------> */}


    <nav className={`
         
          sticky
          w-full
          z-49
          bg-cyan-100
          transition-transform
          duration-300
          ease-in-out
         
        `}>
        
                <div className='flex justify-between pt-5 pl-5 pr-10 pb-3 '>
                    <div className='flex justify-between  gap-10'>
        
                        <div className='w-[200px] h-[88px] overflow-clip relative'>
                            <img className='object-cover absolute top-[-10px]' src={logo} alt="logo"/>
                        </div >
                        <ul className='flex justify-center gap-[30px] pt-10'>
                            <li>Shop Now</li>
                            <li>New Arrivals</li>
                            <li>Contact</li>
                            <li>Meme Merch</li>
                        </ul>
        
                    </div>
                    <div className='pt-10'>
                        Search pannel
                    </div>
                </div>
    </nav>
</> 
}

export default Navbar2;
