import { type CategoryCartProps } from "../lib/types";

const CategoryCart = ({ imgURL, title, text }: CategoryCartProps) => {
  //
  ////UI
  return (
    <div className="w-[267px] h-[314px] hover:shadow-customMorph dark:hover:shadow-none dark:hover:scale-105 dark:transition dark:ease-in-out dark:delay-150 rounded-[40px] flex flex-col  items-center">
      <div className="mt-9">
        <img src={imgURL} alt="icon" />
      </div>
      <h4 className="font-poppins font-medium text-primary text-xl mt-5 dark:text-blue-200">
        {title}
      </h4>
      <p className="max-w-[170px] text-base text-center text-text-color mt-3 brightness-150">
        {text}
      </p>
    </div>
  );
};

export default CategoryCart;
