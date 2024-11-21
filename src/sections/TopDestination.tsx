import { places } from "../constants";
import navigation from "../assets/navigation.png";
import decoration from "../assets/Decore2.png";

const TopDestination = () => {
  return (
    <section
      id="destination"
      className="px-[34px] sm:px-[120px] mt-[60px] sm:mt-[120px] w-full relative"
    >
      <p className="font-poppins font-semibold text-lg text-center uppercase text-text-color">
        Top Selling
      </p>
      <h2 className="font-volkhov capitalize font-bold text-5xl mt-3 text-center">
        Top Destination
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-14 relative">
        {places.map((place) => (
          <div className="shadow-lg rounded-b-2xl hover:scale-110 hover:shadow-2xl">
            <div
              key={place.place}
              className="w-[314px] h-[327px] rounded-t-2xl overflow-hidden"
            >
              <img src={place.imgURL} alt={place.place} />
            </div>
            <div className="h-[130px] w-full bg-white bottom-0 rounded-b-2xl font-poppins font-medium text-lg text-text-color">
              <div className="flex justify-between px-8 py-5">
                <p>{place.place}</p>
                <p>$ {place.price}k</p>
              </div>
              <div>
                <p className="flex px-8">
                  <img
                    src={navigation}
                    alt="navigation arrow"
                    className="pr-2"
                  />{" "}
                  {place.days} Days Trip
                </p>
              </div>
            </div>
          </div>
        ))}
        <img
          src={decoration}
          alt="decoration"
          className="absolute right-6 bottom-5 z-[-1] max-[1445px]:hidden"
        />
      </div>
    </section>
  );
};

export default TopDestination;
