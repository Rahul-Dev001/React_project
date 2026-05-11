import onepiece from '../assets/onepiece.jpg'


function Demanded() {


    return <>
        <div className=" overflow-hidden relative z-21 bg-white">
            <div className='pt-1 pb-10 flex justify-center wrap-normal text-4xl font-bold'>
                MOST DEMANDED PRODUCTS
            </div>
            <div className="pl-[3.8vw] pr-[3.8vw]">
                <div className="flex flex-row ">
                    <div className="w-[50%] h-[80vh]  overflow-auto">
                        <img className='w-[100%] h-[100%] object-cover' src={onepiece} alt="onepiece" />
                    </div>
                    <div className="w-[50%] flex flex-col justify-center">
                        <div className='pl-[7vw] pr-[1vh]'>
                            <div className='pb-[3vh] font-bold'>GOMU GOMU NO MI - AIRPODS PRO CASE</div>
                            <p>Experience the ultimate AirPods Pro case perfect for One Piece fans. Now protect your AirPods inside this devil fruit and stand make a statement with your style.</p>
                            <button></button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-row ">

                    <div className="w-[50%] flex flex-col justify-center">
                        <div className='pr-[7vw]'>
                            <div className='pb-[3vh] font-bold'>GOMU GOMU NO MI - AIRPODS PRO CASE</div>
                            <p>Experience the ultimate AirPods Pro case perfect for One Piece fans. Now protect your AirPods inside this devil fruit and stand make a statement with your style.</p>
                            <button></button>
                        </div>
                    </div>
                    <div className="w-[50%] h-[80vh]  overflow-auto">
                        <img className='w-[100%] h-[100%] object-cover' src={onepiece} alt="onepiece" />
                    </div>
                </div>
                <div className="flex flex-row ">
                <div className="w-[50%] h-[80vh]  overflow-auto">
                    <img className='w-[100%] h-[100%] object-cover' src={onepiece} alt="onepiece" />
                </div>
                <div className="w-[50%] flex flex-col justify-center">
                    <div className='pl-[7vw] pr-[1vh]'>
                        <div className='pb-[3vh] font-bold'>GOMU GOMU NO MI - AIRPODS PRO CASE</div>
                        <p>Experience the ultimate AirPods Pro case perfect for One Piece fans. Now protect your AirPods inside this devil fruit and stand make a statement with your style.</p>
                        <button></button>
                    </div>
                </div>

            </div>
            </div>
            
        </div>


    </>
}
export default Demanded;