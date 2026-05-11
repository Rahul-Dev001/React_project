import React from 'react'
import {Navbar} from './components/Navbar'
import Navbar2 from './components/Navbar2.jsx'
import Nsbanner from './components/Banner.jsx'
import Mcard,{Lcard,Xlcard,Scard} from './components/Itemcard'
import Grid from './components/Grid'
import Demanded from './components/Demanded'
import Banner2 from './components/Banner2.jsx'
import Igbanners from './components/Igbanner.jsx'
import Footer from './components/Footer.jsx'
import Aot1 from './assets/aotposter1.avif'
import Naruto1 from './assets/narutoposter1.avif'
import Demon from './assets/demonslayer.jpg'
import Berserk from './assets/berserkposter1.png'
import Sxfamilyposter1 from './assets/sxfamiltposter1.jpg' 
import Onepiecepoter1 from './assets/onepieceposter.jpg'
import Slimeposter1 from './assets/slimeposter1.jpg'
import Jjkposter1 from './assets/jjkposter1.jpg'
import Windbrk1 from './assets/windbrk1.jpg'
import Kaizuposter1 from './assets/kaizuposter1.jpg'
function App() {
return <>
<div className='bg-green-100'>
   <Navbar2/> 
   <Nsbanner/>
   <div className='pt-10 pb-10 flex justify-center wrap-normal text-4xl font-bold' >
    CHOOSE THE MADNESS
   </div>

   <Grid img={{a1: <Mcard img={Aot1}/>,
               a2: <Mcard img={Naruto1}/>,
               a3: <Mcard img={Demon}/>,
               a4: <Mcard img={Berserk}/>,
               a5: <Mcard img={Sxfamilyposter1}/>,
               a6: <Mcard img={Onepiecepoter1}/>,
               a7: <Mcard img={Slimeposter1}/>,
               a8: <Mcard img={Jjkposter1}/>,
               a9: <Mcard img={Windbrk1}/>,
               a10: <Mcard img={Kaizuposter1}/>}} /> 
   <Demanded/>
   <div>
      <div className='pt-14 pb-18 flex justify-center wrap-normal text-[45px] font-semibold' >
    ANIME BADGES
      </div>
      <Banner2 cards = {{
                           c1: <Lcard/>,
                           c2: <Lcard/>,
                           c3: <Lcard/>,
                           c4: <Lcard/>,
                           c5: <Lcard/>,
                           c6: <Lcard/>,
                           c7: <Lcard/>,
                           c8: <Lcard/>,
                           c9: <Lcard/>,
                           c10: <Lcard/>,
                           c11: <Lcard/>,
                           c12: <Lcard/>
      }} />
   </div>
   <div>
      <div className='pt-4 pb-10 flex justify-center wrap-normal text-[45px] font-semibold' >
         OUR T-SHIRT LINEUPS
      </div> 
      <div className='flex justify-center gap-1'>
         <Xlcard/>
         <Xlcard/>
         <Xlcard/>
      </div>
   </div>

   <div>
      <div className='pt-4   wrap-normal text-[45px] font-semibold' >
         <div className='text-center pb-10'>OUR T-SHIRT LINEUPS</div>
         <div className='font-thin text-[18px] text-center' >Follow us on Instagram to get featured and know more update new product launches</div>
      </div>
      
      <div>
         <Igbanners cards = {{
                           c1: <Scard/>,
                           c2: <Scard/>,
                           c3: <Scard/>,
                           c4: <Scard/>,
                           c5: <Scard/>,
                           c6: <Scard/>,
                           c7: <Scard/>,
                           c8: <Scard/>,
                           c9: <Scard/>,
                           c10: <Scard/>,
                           c11: <Scard/>,
                           c12: <Scard/>
         }}/>
      </div>
   </div>

   <div>
         <div className='text-center pl-60 pr-60' >All artworks posted on this website is intended as fan art and are submitted by independent artist from around the world and is not purported to be official merchandise unless indicated otherwise. If you have any issues regarding the artwork do write in to us at support@weebshop.in.</div>  
   </div> 

   <div>
      <Footer/>
   </div>     
   

</div>

</>;

}

export default App;
