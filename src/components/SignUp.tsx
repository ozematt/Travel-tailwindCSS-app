import Button from "./Button";
import decoration from "../assets/Decore3.png";
import { useEffect, useId, useState } from "react";
import { z } from "zod";

const UserSchema = z
  .object({
    id: z.string(),
    userEmail: z.string().email({ message: "Invalid email" }),
    userPassword: z
      .string()
      .min(6, { message: "Must be at last 6 characters long " }),
    userPasswordRepeat: z.string().min(6).optional(),
  })
  .refine((data) => data.userPassword === data.userPasswordRepeat, {
    message: "Password must match",
    path: ["userPasswordRepeat"],
  });

const UsersArraySchema = z.array(UserSchema);

type User = z.infer<typeof UserSchema>;

type UsersArray = z.infer<typeof UsersArraySchema>;

const SignUp = () => {
  //
  ////DATA
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordRepeat, setUserPasswordRepeat] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [users, setUsers] = useState<UsersArray>([]);

  console.log(errors);

  const id = useId();

  //fetch data from local storage
  useEffect(() => {
    const rawUsers = JSON.parse(localStorage.getItem("users") || "[]");

    const parsedUsers = UsersArraySchema.safeParse(rawUsers);
    if (parsedUsers.success) {
      setUsers(parsedUsers.data);
    } else {
      console.error("Invalid users data in localStorage", parsedUsers.error);
      setUsers([]);
    }
  }, []);

  //Submit sign in form
  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //form data validation
    const result = UserSchema.safeParse({
      id,
      userEmail,
      userPassword,
      userPasswordRepeat,
    });
    if (!result.success) {
      //assign errors values to object {key:value}
      const formattedErrors = result.error.errors.reduce((acc, error) => {
        if (error.path[0]) {
          acc[error.path[0]] = error.message;
        }
        return acc;
      }, {} as Record<string, string>);

      setErrors(formattedErrors);
      return;
    } else {
      setErrors({});
    }

    //checking if user already exist
    const checkUserId = users.some((user) => user.userEmail === userEmail);
    if (checkUserId) {
      //set error and stop if exist
      setErrors({ userEmail: "User already exist" });
      return;
    }

    // make uniq user
    const newUser: User = {
      id: id,
      userEmail: userEmail,
      userPassword: userPassword,
    };
    //updated state with all users
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);

    //set updated array with users included new user
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    //clear form
    setUserEmail("");
    setUserPassword("");
    setUserPasswordRepeat("");
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
          onSubmit={handleSignUp}
          className="flex flex-col items-start justify-start gap-5 w-full z-10"
        >
          <input
            type="email"
            placeholder="Your email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className=" bg-email-icon bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors?.userEmail && (
            <p className="text-red-500 leading-[5px] pl-3">
              {errors.userEmail}
            </p>
          )}
          <input
            type="password"
            placeholder="Your password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors?.userPassword && (
            <p className="text-red-500 leading-[5px] pl-3">
              {errors.userPassword}
            </p>
          )}
          <input
            type="password"
            placeholder="Repeat password"
            value={userPasswordRepeat}
            onChange={(e) => setUserPasswordRepeat(e.target.value)}
            className="bg-no-repeat bg-[center_left_1.5rem] focus:outline-none focus:ring-1 ring-black pl-[3.2rem]  w-full max-w-[500px] h-[70px] rounded-xl placeholder:pl-1"
          />
          {errors?.userPasswordRepeat && (
            <p className="text-red-500 leading-[5px] pl-3">
              {errors.userPasswordRepeat}
            </p>
          )}

          <Button type={"submit"}>Sign Up</Button>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
