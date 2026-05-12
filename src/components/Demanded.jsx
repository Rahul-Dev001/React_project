import onepiece from '../assets/onepiece.jpg'
import Airpodad from '../assets/Airpodad.png'
import Handband from '../assets/Handband.png'
import Figurinead from '../assets/Figurine.png'

function Demanded() {


    return <>
        <div className=" overflow-hidden relative z-21 bg-white">
            <div className='pt-[10vh] pb-10 flex justify-center wrap-normal text-4xl font-bold'>
                MOST DEMANDED PRODUCTS
            </div>
            <div className="pl-[3.8vw] pr-[3.8vw]">
                <div className="flex flex-row ">
                    <div className="w-[50%] h-[80vh]  overflow-auto">
                        <img className='w-[100%] h-[100%] object-cover' src={Airpodad} alt="onepiece" />
                    </div>
                    <div className="w-[50%] flex flex-col justify-center">
                        <div className='pl-[7vw] pr-[1vh]'>
                            <div className='pb-[3vh] font-bold'>GOMU GOMU NO MI - AIRPODS PRO CASE</div>
                            <p>Experience the ultimate AirPods Pro case perfect for One Piece, AOT, Naruto and JJK fans. Now protect your AirPods inside this devil fruit and stand make a statement with your style.</p>
                            <button></button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row ">

                    <div className="w-[50%] flex flex-col justify-center">
                        <div className='pr-[7vw]'>
                            <div className='pb-[3vh] font-bold'>SHINOBI SPIRIT - PREMIUM ANIME HEADBANDS</div>
                            <p>Channel your inner hero with our premium collection inspired by Demon Slayer, 
        Attack on Titan, and Tokyo Revengers. Whether you're 
        defending the walls or mastering your breathing technique, these high-quality, 
        durable headbands let you wear your fandom with pride and make a bold statement.</p>
                            <button></button>
                        </div>
                    </div>
                    <div className="w-[50%] h-[80vh]  overflow-auto">
                        <img className='w-[100%] h-[100%] object-cover' src={Handband} alt="onepiece" />
                    </div>
                </div>
                <div className="flex flex-row ">
                <div className="w-[50%] h-[80vh]  overflow-auto">
                    <img className='w-[100%] h-[100%] object-cover' src={Figurinead} alt="onepiece" />
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <div className='pl-[7vw] pr-[1vh]'>
                        <div className='pb-[3vh] font-bold'>ULTIMATE CHIBI COLLECTIBLES - PREMIUM ANIME FIGURES</div>
                        <p>Bring your favorite worlds to life with this exclusive premium chibi collection 
        inspired by Demon Slayer, Attack on Titan, Jujutsu Kaisen, and more. 
        Highly detailed with dynamic effects and clear display stands, 
        these custom figurines let you showcase your ultimate anime edit and 
        make a bold statement in your collection.</p>
                        <button></button>
                    </div>
                </div>

            </div>
            </div>
            
        </div>


    </>
}
export default Demanded;