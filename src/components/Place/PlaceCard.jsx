import { IoLocationSharp } from "react-icons/io5";
import Img1 from "../../assets/Place/place4.jpg";
import Img2 from "../../assets/Place/image.png";
import Img3 from "../../assets/Place/image copy.png";
import Img4 from "../../assets/Place/image copy 4.png";
import Img5 from "../../assets/Place/image copy 3.png";
import Img6 from "../../assets/Place/image copy 2.png";

const PlacesData = [
  {
    img: Img1,
    title: "Boat",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Underwater",
    location: "US",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Sydney",
    location: "USA",
    description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "United states",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Los Vegas",
    location: "California",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the river Yamuna in the Indian city of Agra.",
    price: 6200,
    type: "Cultural Relax",
  },
];
const PlaceCard = ({handleOrderPopup}) => {
  return (
    <>
      {PlacesData.map((place, index) => (
        <div
          className="shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white cursor-pointer"
          key={index} onClick={handleOrderPopup }
        >
          <div className="overflow-hidden">
            <img
              src={place.img}
              alt="No image"
              className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
            />
          </div>

          <div className="space-y-2 p-3">
            <h1 className="line-clamp-1 font-bold text-xl">{place.title}</h1>
            <div className="flex items-center gap-2 opacity-70">
              <IoLocationSharp />
              <span>{place.location}</span>
            </div>
            <p className="line-clamp-2">{place.description}</p>
            <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
              <div className="opacity-70">
                <p>{place.type}</p>
              </div>
              <div>
                <p className="text-2xl font-bold">${place.price}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PlaceCard;
