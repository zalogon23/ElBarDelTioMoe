import React, { createContext, ReactElement, useEffect, useState } from "react";
import UserType from "../models/UserType";
import { TokensLoginDto } from "../models/Tokens";
import client, { serverUrl } from "../lib/apolloClient";
import queries from "../lib/queries";
import { AsyncStorage, Platform } from "react-native";
import Storage from "react-native-storage";
import UserHandler from "../lib/UserHandler";
import TokensHandler from "../lib/TokensHandler";

interface Props {
  children: ReactElement | ReactElement[]
}

interface UserContextProps {
  user: UserType | null,
  userHandler: UserHandler,
  isLoading: boolean,
}

const sessionContext = createContext({} as UserContextProps);

export default function SessionProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null as UserType | null);
  const tokensHandler = new TokensHandler();
  const userHandler = new UserHandler(setUser, setIsLoading, tokensHandler);
  return (
    <sessionContext.Provider
      value={{
        user,
        userHandler,
        isLoading,
      }}
    >
      {children}
    </sessionContext.Provider>
  )
}

export { sessionContext }