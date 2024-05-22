import bannerImg from "../../assets/banner.png";
import { MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";

function Banner() {
  return (
    <>
      <div className="min-h-[550px] bg-gray-100 py-5">
        <div className=" m-h-[550px] flex justify-center items-center backdrop-blur-xl md:py-12 ">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center ">
              <div>
                <img
                 data-aos="flip-up"
                  src={bannerImg}
                  alt="no image"
                  className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
                />
              </div>
              <div>
                <h1
                  data-aos="fade-up"
                  className="text-3xl md:text-4xl font-bold"
                >
                  Expoler all corners of the world with us{" "}
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 -tracking-wide leading-8"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cupiditate aliquid placeat culpa et alias ad, dolores amet
                                  suscipit, aliquam, ab in. Obcaecati voluptate omnis eum.
                                  <br />
                </p>
                <div className="grid grid-cols-2 gap-6" data-aos="zoom-in">
                  <div className="space-y-6 ">
                    <div className="flex items-center gap-4">
                      <MdFlight className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100  " />
                      <p>Flight</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdOutlineLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100  " />
                      <p>Hotel</p>
                    </div>
                </div>
                                  
                  <div className="space-y-6 ">
                    <div className="flex items-center gap-4">
                      <IoIosWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100  " />
                      <p>Wi-fi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      {/* <IoFastFoodSharp className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100  " /> */}
                      <p>Foods</p>
                </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
