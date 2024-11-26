import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "../services/supabase";
// import { UserContextProvider } from './userContext';

type UserContextProviderProps = {
  children: React.ReactNode;
};

type UserContext = {
  users: string[] | null;
  setUsers: React.Dispatch<React.SetStateAction<string[] | null>>;
};

const UserContext = createContext<UserContext | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [users, setUsers] = useState<string[] | null>(null);

  //fetch users emails from database
  useEffect(() => {
    if (!users) {
      const fetchData = async () => {
        const { data, error } = await supabase.from("users").select();
        if (error) {
          console.log(error);
          return;
        } else {
          const modifiedData = data.map(({ user }) => user);
          setUsers(modifiedData); //added users emails to context api
        }
      };
      fetchData();
    }
    return;
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useUserContext must be used within a UserContext.Provider"
    );
  }
  return context;
};
