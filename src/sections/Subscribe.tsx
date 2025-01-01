import { decoration, violetIcon } from "../assets";
import { Button } from "../components";

const Subscribe = () => {
  //
  ////UI
  return (
    <section
      id="contact-us"
      className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full"
    >
      <div className="bg-[#DFD7F9] dark:bg-opacity-70 bg-opacity-30 max-w-[1170px] min-h-[410px] rounded-tl-[130px] rounded-2xl flex flex-col items-center relative">
        <h3 className="px-[100px] font-poppins font-semibold text-primary text-opacity-80 text-[33px] max-md:text-[25px] leading-[60px] max-lg:leading-normal text-center py-[70px]">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h3>
        <div className="max-lg:gap-3 max-lg:pb-8 w-full flex justify-center max-lg:flex-col max-lg:items-center p-8">
          {" "}
          <input
            type="email"
            placeholder="Your email"
            className=" z-2 bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem] mx-[30px] w-full max-w-[400px] h-[70px] rounded-xl placeholder:pl-1"
          />
          <Button>Subscribe</Button>
        </div>
        <img
          src={decoration}
          alt="decoration"
          className="absolute left-0 bottom-0 dark:opacity-100 opacity-20 z-[-1]"
        />
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-90 scale-75 top-[10px] right-[-80px] dark:opacity-100 opacity-20 z-[-1]"
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
