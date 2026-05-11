import { useRef } from "react";

function Igbanners ({cards}){

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
        className="flex overflow-auto gap-[2vw] scroll-smooth  [scrollbar-width:none] p-[2vw] pt-[1vw] pb-[1.5vw]"
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
export default Igbanners;