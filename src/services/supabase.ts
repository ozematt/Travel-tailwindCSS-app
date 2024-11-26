import { createClient, SupabaseClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY as string;

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
export default supabase;

export const fetchUsers = async () => {
  const { data, error } = await supabase.from("Users").select();
  if (error) {
    console.error("There has been problem with fetch Users data", error);
    return;
  }
  return data;
};

export const addUser = async (email: string, password: string) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase
      .from("users")
      .insert([{ user: email, password: hashedPassword }])
      .select();

    if (error) {
      console.error("There has been problem with adding User:", error);
      return;
    }
    console.log("User added successfully!");
  } catch (error) {
    console.error("Error during user registration!");
  }
};
