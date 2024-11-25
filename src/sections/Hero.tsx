import heroIMG from "../assets/HeroIMG.png";
import bgDecoration from "../assets/Decore.png";
import bgDecorationDark from "../assets/Decore_dark.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="px-[34px] sm:px-[120px] sm:mt-[80px] w-full relative"
    >
      <div className="max-w-[550px]">
        <p className="text-accent uppercase font-poppins text-lg font-semibold mt-5">
          Best destination around the world
        </p>
        <h1 className="font-volkhov text-7xl  font-semibold mt-5 leading-[75px] text-primary">
          Travel, <span className="text-accent">enjoy</span> and live a new and
          full life
        </h1>
        <p className="font-poppins  text-base text-text-color font-light mt-7 max-w-[450px]">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="max-w-[370px] flex max-sm:flex-col items-start mt-11 max-sm: gap-5 sm:space-x-9">
          <button className="bg-[#F1A501] px-8 py-3 rounded-xl text-white font-openSans hover:shadow-customYellow">
            Find out more
          </button>
          <div>
            <button className="bg-[#DF6951] rounded-full p-5 hover:shadow-customRed">
              <div className="white-triangle translate-x-1"></div>
            </button>{" "}
            <span className="text-center text-text-color font-poppins ml-2">
              Play Demo
            </span>
          </div>
        </div>
      </div>
      <img
        src={bgDecoration}
        alt="background decoration"
        className="absolute z-[-1] top-[-200px] right-0 dark:hidden"
      />
      <img
        src={bgDecorationDark}
        alt="background decoration"
        className="absolute z-[-1] top-[-200px] right-0 hidden dark:block"
      />
      <div className="absolute top-[-150px] right-[80px]">
        <img
          src={heroIMG}
          alt="traveler"
          width={750}
          height={750}
          className="z-1 hidden xl:block"
        />
      </div>
    </section>
  );
};

export default Hero;
