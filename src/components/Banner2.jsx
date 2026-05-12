import { useRef } from "react";

function Nsproducts ({cards}){

  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -1*window.innerWidth/5,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: window.innerWidth/5,
    //   left: 100,
      behavior: "smooth",
    });
  };

return <>
    <div className="pb-[8vh]">
        
    <div className="relative">
      
      
    
      <div 
        ref={scrollRef}
        className="flex overflow-auto overflow-y-hidden gap-[2px] scroll-smooth [scrollbar-width:none] pl-[2vw] pr-[2vw] pb-[10px]" 
      >
        
        {cards.c1}
        {cards.c2}
        {cards.c3}
        {cards.c4}
        {cards.c5}
        {cards.c6}
        {cards.c7}
        {cards.c8}
        {cards.c9}
        {cards.c10}
        {cards.c11}
        {cards.c12}
        
      </div>
        <div className="flex justify-center gap-[10px] pt-4">
        
          <button onClick={scrollLeft}>
            <div className="font-normal shadow-md shadow-gray-500 text-[2rem] pt-[4px] pb-[4px] pl-[17px] pr-[17px] hover:shadow-md hover:shadow-black">{"<"}</div>
          </button>
          <button onClick={scrollRight}>
            <div className="font-normal shadow-md shadow-gray-500 text-[2rem] pt-[4px] pb-[4px] pl-[17px] pr-[17px] hover:shadow-md hover:shadow-black">{">"}</div>
          </button>
        </div>
    </div>

    </div>
    
</>
}
export default Nsproducts;