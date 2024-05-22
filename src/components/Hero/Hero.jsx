import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  offset: 100,
  delay: 200,
  duration: 1000
});
function Hero() {

  const [priceValue, setPriceValue] = useState(() => 30); 
  return (
    <div
    
      className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white ">
            <p data-aos="fade-up" className="text-sm" >Our packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Serach Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 bg-white rounded-md p-4 relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-3 ">
              <div>
                <label htmlFor="destination" className="opacity-70 ">
                  Serach Your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2 rounded-full   focus:outline-primary outline-1 p-2 "
                />
              </div>
              <div>
                <label htmlFor="date" className="opacity-70 ">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  id="destination"
                  className="w-full bg-gray-100 my-2 rounded-full focus:outline-primary  outline-1 p-2 "
                />
              </div>

              <div>
                <label htmlFor="destination" className="opacity-70 ">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Peice</p>
                    <p className="font-bold text-xl ">${priceValue}</p>
                  </div>
                </label>
                <div className=" bg-gray-100 rounded-full p-2 flex items-center justify-center mt-1.5 ">
                  <input
                    type="range"
                    name="destination"
                    min={150}
                    max={1000}
                    value={priceValue.current}
                    step={10}
                    onChange={(e) => {
                      setPriceValue(e.target.value);
                    }}
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white rounded-full  transition-all hover:scale-105 px-4 py-2 absolute left-1/2 -bottom-5  -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
