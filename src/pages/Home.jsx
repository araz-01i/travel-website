import { useState } from "react";
import NatureVid from "../assets/main.mp4";
import Hero from "../components/Hero/Hero";
import Place from "../components/Place/Place";
import Bannerimg from "../components/Bannerimg/Bannerimg";
import Blogs from "./Blogs";
import Banner from "../components/Banner/Banner";
import ImgCopy from "../assets/cover-women.jpg"
import TravelCover from "../assets/travel-cover2.jpg";
import Testimonal from "../components/Testimonal/Testimonal.jsx";
import Poup from "../components/Popup/Poup.jsx";

function Home() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="h-[700px] relative ">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0  h-[700px] w-full  object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Place handleOrderPopup={handleOrderPopup} />
        <Bannerimg ImgCopy={ImgCopy} />
        <Blogs />
        <Banner />
        <Bannerimg ImgCopy={TravelCover} />
        <Testimonal />
        <Poup orderPoup={orderPopup} setOrderPoup={setOrderPopup}/>

      </div>
    </>
  );
}

export default Home;
