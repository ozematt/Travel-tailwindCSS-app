import { steps } from "../constants";
import { tripCart } from "../assets";

const BookTrip = () => {
  //
  ////UI
  return (
    <section className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full relative">
      <div className="max-w-[512px]">
        {" "}
        <p className="font-poppins font-semibold text-lg  uppercase text-text-color dark:brightness-150">
          Easy and Fast
        </p>
        <h2 className="font-volkhov capitalize font-bold text-5xl leading-[60px] mt-4 dark:text-stone-200">
          Book Your Next Trip In 3 Easy Steps
        </h2>
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mt-7">
            <img src={step.icon} alt="icon" width={48} height={48} />
            <div className="ml-6">
              <p className="font-poppins font-bold text-text-color dark:brightness-200">
                {step.title}
              </p>
              <p className="max-w-[327px] font-poppins text-text-color dark:brightness-150">
                {step.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <img
        src={tripCart}
        alt="trip cart"
        className="absolute max-sm:hidden max-xl:mt-[90px] max-xl:left-10 max-sm:left-0 xl:right-5 xl:top-5"
      />
    </section>
  );
};

export default BookTrip;
