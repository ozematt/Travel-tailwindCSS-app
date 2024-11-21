import decoration from "../assets/Decore3.png";
import violetIcon from "../assets/violet_Icon.png";

const Subscribe = () => {
  return (
    <section className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full">
      <div className="bg-[#DFD7F9] bg-opacity-30 max-w-[1170px] min-h-[410px] rounded-tl-[130px] rounded-2xl flex flex-col items-center relative">
        <h3 className="font-poppins font-semibold text-primary text-opacity-80 text-[33px] leading-[60px] text-center max-w-[860px] py-[70px]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="space-x-6">
          {" "}
          <input
            type="email"
            placeholder="Your email"
            className=" z-2 bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem] min-w-[412px] min-h-[70px] rounded-xl placeholder:pl-1"
          />
          <button className="px-[50px] py-[22px] rounded-xl hover:shadow-customMorph bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white font-openSans text-lg">
            Subscribe
          </button>
        </div>
        <img
          src={decoration}
          alt="decoration"
          className="absolute left-0 bottom-0 opacity-20 z-[-1]"
        />
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-90 scale-75 top-[10px] right-[-80px] opacity-20 z-[-1]"
        />
        <img
          src={violetIcon}
          alt="icon"
          className="absolute right-[-20px] top-[-10px]"
        />
      </div>
    </section>
  );
};

export default Subscribe;
