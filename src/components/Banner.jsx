import { useRef } from "react";
import Berserkad from '../assets/berserkad.webp'
import Dandanad1 from '../assets/dandanad1.webp'
import Berserkad2 from '../assets/berserkad2.webp'
import Jjkad1 from '../assets/jjkad1.jpg'
import Chainsawad1 from '../assets/chainsawad1.jpeg'

function Nsbanner (){

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -1*window.innerWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

return <>
    <div className="pt-[0px]">
        
    <div className="relative">
      
      
    
      <div 
        ref={scrollRef}
        className="flex overflow-auto gap-0 scroll-smooth snap-x snap-mandatory [scrollbar-width:none]  pl-0 pr-0"
      > 
        <div className="min-w-[100vw] h-[100vh] snap-start bg-red-300 overflow-clip relative">
            <img className='h-full w-full object-cover  duration-500 rounded-[5px] absolute ' src={Chainsawad1} alt="demon"/>        
        </div>
        <div className="min-w-[100vw] h-[100vh] snap-start bg-red-300 overflow-clip relative">
            <img className='h-full w-full object-cover  duration-500 rounded-[5px] absolute ' src={Berserkad} alt="demon"/>        
        </div>
        <div className="min-w-[100vw] h-[100vh] snap-start bg-red-300 overflow-clip relative">
            <img className='h-full w-full object-cover  duration-500 rounded-[5px] absolute ' src={Dandanad1} alt="demon"/>        
        </div>
        <div className="min-w-[100vw] h-[100vh] snap-start bg-red-300 overflow-clip relative">
            <img className='h-full w-full object-cover  duration-500 rounded-[5px] absolute ' src={Berserkad2} alt="demon"/>        
        </div>
        <div className="min-w-[100vw] h-[100vh] snap-start bg-red-300 overflow-clip relative">
            <img className='h-full w-full object-cover  duration-500 rounded-[5px] absolute ' src={Jjkad1} alt="demon"/>        
        </div>
        
        
      </div>
        <div className="flex justify-center gap-[10px] pt-4">
        
          <button onClick={scrollLeft}>
            Left
          </button>
          <button onClick={scrollRight}>
            Right
          </button>
        </div>
    </div>

    </div>
    
</>
}
export default Nsbanner;