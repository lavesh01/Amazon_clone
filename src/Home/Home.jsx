import "./Home.css";

import Product from "./Product";
import React from 'react';

const Home = () => {
  return (
    <div className="home">
       <div className="home_container" >
        {/* <img className="home_image" src="https://m.media-amazon.com/images/I/91lLq8EGu1L._SX3000_.jpg" alt="background" /> */}
        <img className="home_image" src="https://m.media-amazon.com/images/I/71vdTR50hFL._SX3000_.jpg" alt="background" />
        
       <div className="home_row">
         <Product 
            id="1"
            title="Hisense 564 L Inverter Frost-Free Side-by-Side Door Refrigerator with Water Dispenser (RS564N4SBNW, Black Stainless Steel Finish)"
            price="54,990"
            rating={5}
            image="https://m.media-amazon.com/images/I/21Tcb80UcTL._AC_UF452,452_FMjpg_.jpg"
         />
         <Product 
            id="2"
            title="Spotzero by Milton Prime Spin Mop with Big Wheels and Stainless Steel Wringer, Bucket Floor Cleaning and Mopping System,2 Microfiber Refills"
            price="1299"
            rating={4}
            imgae="https://m.media-amazon.com/images/I/71UpuxQrSlL._SX679_.jpg"
         />
       </div>
       
       <div className="home_row">
       <Product 
            id="3"
            title="Noise ColorFit Pulse Grand Smart Watch with 1.69 (4.29cm) HD Display, 60 Sports Modes, 150 Watch Faces, Fast Charge, Spo2, Stress, Sleep, Heart Rate Monitoring & IP68 Waterproof (Jet Black)"
            price="1499"
            rating={4}
            imgae="https://m.media-amazon.com/images/I/41qqmdUWnhL._AC_SY400_.jpg"
        />
       <Product 
            id="4"
            title=" 3M Littman Clinpro Tooth Creme NaF Anticavity Toothpaste - 113 g (Vanilla Mint) "
            price="1535"
            rating={5}
            image="https://m.media-amazon.com/images/I/71H3Inv5nWL._SX522_.jpg"
       />
       <Product 
            id="5"
            title="Apple iPhone 13 (128GB) - (Product) RED"
            price="62,990"
            rating={4}
            imgae="https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY327_FMwebp_QL65_.jpg"
       />
        </div>


       <div className="home_row">
       <Product 
            id="6"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price="1,58,500"
            rating={5}
            imgae="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY327_FMwebp_QL65_.jpg"
       />
       </div>
       
       </div>
    </div>
  )
}

export default Home;