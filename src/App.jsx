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
import Baj1 from './assets/baj1.webp'
import Baj2 from './assets/dnbaj1.webp'
import Baj3 from './assets/dollbaj.jpg'
import Baj4 from './assets/gojobaj.jpg'
import Baj5 from './assets/onepiecebaj1.jpg'
import Baj6 from './assets/demonbaj.webp'
import Baj7 from './assets/tokyorevengerbaj1.webp'
import Baj8 from './assets/wrathbaj1.jpg'
import Baj9 from './assets/demonbaj2.webp'
import Baj10 from './assets/demonbaj3.webp'
import Baj11 from './assets/demonbaj4.webp'
import Baj12 from './assets/jjkbaj1.webp'
import Tshirt1 from './assets/jjktshirt1.jpg'
import Tshirt2 from './assets/onepiecetshirt.jpg'
import Tshirt3 from './assets/cattshirt.jpg'
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
      </div >
         <div>
            <Banner2 cards = {{
                              c1: <Lcard img={Baj1} title={"Straw Hat Captain Badge - One Piece"}/>,
                              c2: <Lcard img={Baj2} title={"Ryuk Death Note Badge - Death Note"}/>,
                              c3: <Lcard img={Baj3} title={"Anime Doll Collector Badge - Kawaii Edition"}/>,
                              c4: <Lcard img={Baj4} title={"Gojo Satoru I'll Murder You Badge - Jujutsu Kaisen"}/>,
                              c5: <Lcard img={Baj5} title={"Straw Hat Pirates Wanted Badge - One Piece"}/>,
                              c6: <Lcard img={Baj6} title={"Flame Hashira Power Badge - Demon Slayer"}/>,
                              c7: <Lcard img={Baj7} title={"Tokyo Manji Gang Badge - Tokyo Revengers"}/>,
                              c8: <Lcard img={Baj8} title={"Wrath Symbol Anime Badge - Fullmetal Edition"}/>,
                              c9: <Lcard img={Baj9} title={"Tanjiro Water Breathing Badge - Demon Slayer"}/>,
                              c10: <Lcard img={Baj10} title={"Upper Moon Demon Badge - Demon Slayer"}/>,
                              c11: <Lcard img={Baj11} title={"Hashira Elite Corps Badge - Demon Slayer"}/>,
                              c12: <Lcard img={Baj12} title={"Cursed Energy Symbol Badge - Jujutsu Kaisen"}/>
            }} />
   
         </div>
   </div>
   <div>
      <div className='pt-4 pb-10 flex justify-center wrap-normal text-[45px] font-semibold' >
         OUR T-SHIRT LINEUPS
      </div> 
      <div className='flex justify-center gap-1'>
         <Xlcard img={Tshirt1}/>
         <Xlcard img={Tshirt2}/>
         <Xlcard img={Tshirt3}/>
      </div>
   </div>

   <div>
      <div className='pt-10   wrap-normal text-[45px] font-semibold' >
         <div className='text-center pb-10'>JOIN OUR INSTAGRAM FAMILY</div>
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
         <div className='text-center pl-60 pr-60' >All artworks posted on this website is intended as fan art and are submitted by independent artist from around the world and is not purported to be official merchandise unless indicated otherwise. If you have any issues regarding the artwork do write in to us at support@otastation.in.</div>  
   </div> 

   <div>
      <Footer/>
   </div>     
   

</div>

</>;

}

export default App;
