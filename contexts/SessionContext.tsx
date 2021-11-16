import React, { createContext, ReactElement, useEffect, useState } from "react";
import UserType from "../models/UserType";
import { TokensLoginDto } from "../models/Tokens";
import client, { serverUrl } from "../lib/apolloClient";
import queries from "../lib/queries";
import { AsyncStorage, Platform } from "react-native";
import Storage from "react-native-storage";
import SessionHandler from "../lib/SessionHandler";
import TokensHandler from "../lib/TokensHandler";

interface Props {
  children: ReactElement | ReactElement[]
}

interface UserContextProps {
  sessionHandler: SessionHandler,
  isLoading: boolean,
}

const sessionContext = createContext({} as UserContextProps);

export default function SessionProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [user, setUser] = useState(null as UserType | null);
  const tokensHandler = new TokensHandler();
  const sessionHandler = new SessionHandler({
    user,
    setUser,
    setIsLoading,
    isOnline,
    setIsOnline,
    tokensHandler
  });
  return (
    <sessionContext.Provider
      value={{
        sessionHandler,
        isLoading,
      }}
    >
      {children}
    </sessionContext.Provider>
  )
}

export { sessionContext }