import React, { createContext, ReactElement, useEffect, useState } from "react";
import UserType from "../models/UserType";
import { TokensLoginDto } from "../models/Tokens";
import client, { serverUrl } from "../lib/apolloClient";
import queries from "../lib/queries";

interface Props {
  children: ReactElement | ReactElement[]
}

interface UserContextProps {
  user: UserType | null,
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  isLoading: boolean,
}

const userContext = createContext({} as UserContextProps);

export default function UserProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null as UserType | null);
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export { userContext }