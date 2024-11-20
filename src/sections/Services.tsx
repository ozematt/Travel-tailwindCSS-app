import { category } from "../constants";

const Services = () => {
  return (
    <section
      id="about-us"
      className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full relative"
    >
      <p className="font-poppins font-semibold text-lg text-center uppercase text-text-color">
        Category
      </p>
      <h2 className="font-volkhov capitalize font-bold text-5xl mt-3 text-center">
        We offer best Services
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-8 mt-14">
        {category.map((item, index) => (
          <div
            key={index}
            className="w-[267px] h-[314px] hover:shadow-customMorph rounded-[40px] flex flex-col  items-center"
          >
            <div className="mt-9">
              <img src={item.imgURL} alt="icon" />
            </div>
            <h4 className="font-poppins font-medium text-primary text-xl mt-5">
              {item.title}
            </h4>
            <p className="max-w-[170px] text-base text-center text-text-color mt-3">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
