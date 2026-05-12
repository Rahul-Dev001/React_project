import Demonslayer from '../assets/demonslayer.jpg';
import Aot1 from '../assets/aotposter1.avif'

function Mcard({img}){

return <>
<div className="w-[18vw] h-[29vw] shadow-md hover:shadow-black border-1 border-gray-200 box-border rounded-[2px] group transform-gpu
    will-change-transform transition-all  duration-1200 hover:rotate-1 hover:shadow-2xl  duration-[300ms] hover:duration-1500">
    <div className="h-[23vw] overflow-hidden">
        <img className='group-hover:scale-105 duration-500' src={img} alt="nuffin"/>
    </div>
    <div className='h-[6vw] flex flex-col justify-center '>
    <div className='font-bold text-[1.2vw]  pl-[1.5vw] '>
        {"DEMON SLAYER -->"}
    </div>
    </div>
</div>
</>
}
function Lcard({img,title}){

return <>
<div className="min-w-[20vw] h-[85vh] shadow-md hover:shadow-black border-1 border-gray-200 box-border rounded-[3px] group transform-gpu
    will-change-transform transition-transform  hover:shadow-2xl hover:shadow-black-800 duration-300 hover:duration-300 ease-out ">
        
    <div className="h-[23vw] overflow-clip relative ">
        <img className='h-full w-full object-cover group-hover:scale-105 duration-600' src={img} alt="demon"/>
    </div>
    <div className='h-[6] flex flex-col justify-center pl-[1.5vw] pr-[1.5vw] pt-[2vw]'>
    <div className='font-bold text-[1.2vw]  '>
        {title}
    </div>
    <div className='text-[12px] text-gray-500'>OTA-STATION</div>

    <div>Rs. 69.50</div>
    <div className='flex justify-center pt-[1.5vw] '>
       <div className='border-[1.5px] rounded-[4px]  border-black  pt-[0.8vw] pb-[0.8vw] pr-[5vw] pl-[5vw]  hover:shadow-[0_0_2px_rgba(255,255,255,0.2)] hover:ring-1'>
        BUY NOW
    </div> 
    </div>
    
    </div>
</div>
</>
}

function Xlcard({img}){

return <>
<div className="w-[30vw] h-[92vh] shadow-md shadow-red-200 border-1 border-gray-200 box-border rounded-[3px] group transform-gpu
    will-change-transform transition-all    hover:shadow-2xl hover:shadow-black-800 duration-[300ms] hover:duration-250 hover:scale-102">
    <div className="h-[60vh] overflow-hidden p-7 rounded-[2px]">
        <img className=' duration-500 rounded-[5px]' src={img} alt="demon"/>
    </div>
    <div className='h-[6vw] flex flex-col justify-center '>
    <div className='font-bold text-[1.2vw]  pl-[1.5vw] '>
        {"DEMON SLAYER -->"}
    </div>
    </div>
</div>
</>
}

function Scard(){
    
return <>
<div className="min-w-[17vw] h-[23vw] shadow-md shadow-red-200 border-1 border-gray-200 box-border rounded-[3px] group transform-gpu
    will-change-transform transition-all    hover:shadow-2xl hover:shadow-black-1200 duration-[300ms] hover:duration-250 hover:scale-102 overflow-clip">
    <div className="h-[22vw] w-[16vw] overflow-clip rounded-[2px] m-[1vh] relative">
        <img className='h-full w-full object-cover  duration-500 rounded-[5px] absolute ' src={Demonslayer} alt="demon"/>
    </div>
    
</div>
</>
}

export default Mcard 
export {Lcard,Xlcard,Scard}
// shadow-[inset_0_0_0_2px_darkgray]