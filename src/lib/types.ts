import { z } from "zod";

export const SignUpSchema = z
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

export type SignUpSchema = z.infer<typeof SignUpSchema>;

export const EmailSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
});

export type EmailSchema = z.infer<typeof EmailSchema>;

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button" | undefined;
};

export type DestinationCardProps = {
  imgURL: string;
  place: string;
  price: string;
  days: string;
};

export type CommentCartProps = {
  name: string;
  from: string;
  avatar: string;
  comment: string;
};

export type CategoryCartProps = {
  imgURL: string;
  title: string;
  text: string;
};
