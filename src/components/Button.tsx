import { type ButtonProps } from "../lib/types";

const Button = ({ children, onClick, type }: ButtonProps) => {
  //
  ////UI
  return (
    <button
      type={type ? type : undefined}
      onClick={onClick ? onClick : undefined}
      className="max-lg:mr-[30px]  px-[50px] py-[22px]  rounded-xl hover:shadow-customMorph dark:hover:shadow-none dark:hover:scale-105 bg-gradient-to-b from-[#FF946D] to-[#FF7D68] text-white font-openSans text-lg"
    >
      {children}
    </button>
  );
};

export default Button;
