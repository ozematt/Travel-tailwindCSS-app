import { heroIMG, bgDecoration } from "../assets";

const Hero = () => {
  //
  ////UI
  return (
    <section
      id="home"
      className="px-[34px] sm:px-[120px] sm:mt-[80px] w-full relative"
    >
      <div className="max-w-[550px]">
        <p className="text-accent dark:brightness-125 uppercase font-poppins text-lg font-semibold mt-5">
          Best destination around the world
        </p>
        <h1 className="font-volkhov text-7xl  font-semibold mt-5 leading-[75px] text-primary dark:text-stone-100">
          Travel, <span className="text-accent dark:brightness-125">enjoy</span>{" "}
          and live a new and full life
        </h1>
        <p className="font-poppins  text-base text-text-color font-light mt-7 max-w-[450px] dark:brightness-150">
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>
        <div className="max-w-[370px] flex max-sm:flex-col items-start mt-11 max-sm: gap-5 sm:space-x-9">
          <button className="bg-[#F1A501] dark:text-black px-8 py-3 rounded-xl text-white font-openSans hover:shadow-customYellow dark:hover:shadow-none dark:hover:scale-105">
            Find out more
          </button>
          <div className="dark:hover:scale-105">
            <button className="bg-[#DF6951] rounded-full p-5 hover:shadow-customRed dark:hover:shadow-none ">
              <div className="white-triangle translate-x-1"></div>
            </button>{" "}
            <span className="text-center text-text-color font-poppins ml-2 dark:text-white">
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
      <div className="absolute top-[-150px] right-[-50px]">
        <img
          src={heroIMG}
          alt="traveler"
          width={950}
          height={950}
          className="z-1 hidden xl:block"
        />
      </div>
    </section>
  );
};

export default Hero;
