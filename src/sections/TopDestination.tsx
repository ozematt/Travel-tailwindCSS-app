import { places } from "../constants";
import { decoration2 } from "../assets";
import { DestinationCard } from "../components";

const TopDestination = () => {
  //
  ////UI
  return (
    <section
      id="destination"
      className="px-[34px] sm:px-[120px] mt-[60px] sm:mt-[120px] w-full relative"
    >
      <p className="font-poppins font-semibold text-lg text-center uppercase text-text-color dark:brightness-150">
        Top Selling
      </p>
      <h2 className="font-volkhov capitalize font-bold text-5xl mt-3 text-center dark:text-stone-200">
        Top Destination
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-[70px] mt-14 relative">
        {places.map((place) => (
          <DestinationCard key={place.place} {...place} />
        ))}
        <img
          src={decoration2}
          alt="decoration"
          className="absolute right-6 bottom-5 z-[-1] max-[1445px]:hidden"
        />
      </div>
    </section>
  );
};

export default TopDestination;
