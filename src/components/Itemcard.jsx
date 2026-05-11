import Demonslayer from '../assets/demonslayer.jpg';
import Aot1 from '../assets/aotposter1.avif'

function Mcard({img}){

return <>
<div className="w-[18vw] h-[29vw] shadow-md shadow-black border-1 border-gray-200 box-border rounded-[2px] group transform-gpu
    will-change-transform transition-all  duration-1200 hover:rotate-1 hover:shadow-2xl hover:shadow-black-800 duration-[300ms] hover:duration-1500">
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
function Lcard(){

return <>
<div className="min-w-[20vw] h-[80vh] shadow-md shadow-black-400 border-1 border-gray-200 box-border rounded-[3px] group transform-gpu
    will-change-transform transition-transform   hover:scale-101 hover:shadow-2xl hover:shadow-black-800 duration-300 hover:duration-300 ease-out ">
    <div className="h-[23vw] overflow-hidden ">
        <img className='group-hover:scale-105 duration-500' src={Demonslayer} alt="demon"/>
    </div>
    <div className='h-[6vw] flex flex-col justify-center '>
    <div className='font-bold text-[1.2vw]  pl-[1.5vw] '>
        {"DEMON SLAYER -->"}
    </div>
    </div>
</div>
</>
}

function Xlcard(){

return <>
<div className="w-[30vw] h-[92vh] shadow-md shadow-black-400 border-1 border-gray-200 box-border rounded-[3px] group transform-gpu
    will-change-transform transition-all    hover:shadow-2xl hover:shadow-black-800 duration-[300ms] hover:duration-250 hover:scale-102">
    <div className="h-[60vh] overflow-hidden p-8 rounded-[2px]">
        <img className=' duration-500 rounded-[5px]' src={Demonslayer} alt="demon"/>
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