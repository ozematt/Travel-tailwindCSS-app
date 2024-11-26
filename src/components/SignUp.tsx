import Button from "./Button";
import decoration from "../assets/Decore3.png";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addUser } from "../services/supabase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { SignUpSchema } from "../lib/types";

const SignUp = () => {
  //
  ////DATA
  const {
    register,
    handleSubmit,
    reset,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(SignUpSchema),
  });
  const navigate = useNavigate();
  //context api
  const { users } = useUserContext();

  //handle form submit
  const onSubmit = ({ email, password }: SignUpSchema) => {
    //checking if user exist
    const userExist = users?.some((user) => user === email);
    //add error and stop if user already exist
    if (userExist) {
      setError("email", { type: "custom", message: "User already exist" });
      return;
    }
    //if user does not exist
    clearErrors(["email"]); //clear added error
    addUser(email, password); // save user in database
    alert("User add and login successfully!"); //show alert of success
    navigate("/"); //navigate to home page
    localStorage.setItem("user", JSON.stringify(email)); //add user to local storage, so user email can be seen
    reset(); //reset form fields
  };

  ////UI
  return (
    <section className="px-[34px] sm:px-[120px] mt-[80px] w-full">
      <div className="flex flex-col justify-center shadow-customMorph items-start max-w-[800px] min-h-[450px] rounded-xl  max-sm:p-[40px] p-[80px] mx-auto gap-10 relative dark:bg-gray-900 dark:shadow-none">
        {" "}
        <h2 className="font-volkhov font-bold text-5xl my-8 z-10 dark:text-stone-200">
          Make your account:
        </h2>
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-45 scale-50  bottom-[110px] left-[-100px] dark:opacity-50 opacity-20 z-[1]"
        />
        <img
          src={decoration}
          alt="decoration"
          className="absolute -rotate-90 scale-75  top-[7px] right-[-80px] dark:opacity-50 opacity-20 z-[1]"
        />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-start justify-start gap-5 w-full z-10"
        >
          <input
            {...register("email")}
            type="email"
            placeholder="Your email"
            className=" bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.email && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.email.message}
            </p>
          )}
          <input
            {...register("password")}
            type="new-password"
            placeholder="Your password"
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.password && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.password.message}
            </p>
          )}
          <input
            {...register("confirmPassword")}
            type="new-password"
            placeholder="Confirm password"
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-[14px] pl-1  leading-[5px]">
              {errors.confirmPassword.message}
            </p>
          )}
          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
