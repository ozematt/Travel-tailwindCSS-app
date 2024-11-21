import { places } from "../constants";
import decoration from "../assets/Decore2.png";
import DestinationCard from "../components/DestinationCard";

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
          <DestinationCard {...place} />
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
