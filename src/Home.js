import React from "react";
import './Home.css';
import homeBanner from './assets/image/online-shopping-web-banner.jpg';
import Product from "./Product";
import asusProductImage from './assets/image/asus_laptop.jpg';
import appleProductImage from './assets/image/apple_laptop.jpg';
import samsungProductImage from './assets/image/samsung_laptop.jpeg';


function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img src={homeBanner} alt="home-banner" className="img-fluid" />
        </div>
      </div>
      <div className="row gap-3 px-4 my-4 gap-3">
        <Product
          id="home1"
          title="ASUS == TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)"
          price={79.85}
          rating={3}
          imageUrl={asusProductImage}
        />
        <Product
          id="home2"
          title="Samsung == TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)"
          price={89.85}
          rating={4}
          imageUrl={samsungProductImage}
        />
        <Product
          id="home3"
          title="Apple ==  TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)"
          price={99.85}
          rating={5}
          imageUrl={appleProductImage}
        />
      </div>

      <div className="row gap-3 px-4 my-4 gap-3">
      <Product
          id="home4"
          title="ASUS == TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)"
          price={79.85}
          rating={3}
          imageUrl={asusProductImage}
        />
        <Product
          id="home5"
          title="Samsung == TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)"
          price={89.85}
          rating={4}
          imageUrl={samsungProductImage}
        />
        <Product
          id="home6"
          title="Apple ==  TUF Gaming F17 (2022) Gaming Laptop,17.3&quot;(43.94 cms) FHD 144Hz, RTX 3050 4GB GPU, (16GB RAM /512GB)"
          price={99.85}
          rating={5}
          imageUrl={appleProductImage}
        />
      </div>
    </div>
  );
}

export default Home;
