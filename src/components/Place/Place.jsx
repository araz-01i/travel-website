
import PlaceCard from "./PlaceCard";

function Place({handleOrderPopup}) {
  return (
    <div className="bg-gray-50  ">
          <section data-aos="fade-up" className="container mx-auto py-24">
              <h1 className=" my-8 text-3xl font-bold border-l-8 border-l-primary p-2">Best Place to Visit</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
                  <PlaceCard handleOrderPopup={ handleOrderPopup } />
            
          </div>
          </section>
    </div>
  );
}

export default Place;
