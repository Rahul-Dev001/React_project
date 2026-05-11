import React from 'react'
import logo from '../assets/logo.png'
import { useEffect, useState } from "react";

function Navbar(){

//   const [sticky,setSticky] = useState(true);
  const [showNavbar, setShowNavbar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar near top
      if (currentScrollY < 120) {
        setShowNavbar(false);
      }
      // Hide when scrolling down
      else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      }
      // Show when scrolling up
      else {
        setShowNavbar(true);
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
//  return<>
//     <div><navbar className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 bg-white ${
//           showNavbar ? "translate-y-0" : "-translate-y-full"}`}>


 return<>
    <nav className={`
          ${showNavbar ? "sticky translate-y-[120px]" : ""}
          top-[${top}px]
          
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
    
</> 
}
function Nav1 (){

    return <div>raul</div>
}
export {Navbar};
export default Nav1;

