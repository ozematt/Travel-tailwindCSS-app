import { companies } from "../constants";

const Companies = () => {
  return (
    <section className="px-[34px] sm:px-[120px] mt-[100px] sm:mt-[200px] w-full relative">
      <div className="flex flex-wrap items-center justify-evenly">
        {companies.map((company) => (
          <img
            key={company.name}
            src={company.imgURL}
            alt={company.name}
            className=" hidden md:block grayscale w-[200px] h-[100px] rounded-2xl object-scale-down hover:shadow-customMorph hover:grayscale-0 hover:scale-110 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default Companies;
