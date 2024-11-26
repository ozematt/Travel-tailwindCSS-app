import Button from "./Button";
import decoration from "../assets/Decore3.png";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import supabase, { addUser } from "../services/supabase";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";

const SignUpSchema = z
  .object({
    email: z.string().email({ message: "Invalid email" }),
    password: z
      .string()
      .min(6, { message: "Must be at last 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, { message: "Must be at last 6 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

type SignUpSchema = z.infer<typeof SignUpSchema>;

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

  const { users, setUsers } = useUserContext();

  // const [users, setUsers] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("users").select();
      if (error) {
        console.log(error);
        return;
      } else {
        const modifiedData = data.map(({ user }) => user);
        setUsers(modifiedData);
      }
    };
    fetchData();
  }, []);

  const onSubmit = ({ email, password }: SignUpSchema) => {
    const userExist = users.some((user) => user === email);
    if (userExist) {
      setError("email", { type: "custom", message: "User already exist" });
      return;
    }
    clearErrors(["email"]);
    addUser(email, password);
    alert("User add and login successfully!");
    navigate("/");
    localStorage.setItem("user", JSON.stringify(email));
    reset();
  };

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
