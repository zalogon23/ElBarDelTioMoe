import React, { createContext, ReactElement, useEffect, useState } from "react";
import UserType from "../models/UserType";
import UserHandler from "../lib/UserHandler";

interface Props {
  children: ReactElement | ReactElement[]
}

interface UserContextProps {
  user: UserType | null,
  userHandler: UserHandler,
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
  isLoading: boolean
}

const userContext = createContext({} as UserContextProps);

export default function UserProvider({ children }: Props) {
  const userHandler = new UserHandler();
  const [isLoading, setIsLoading] = useState(true);
  const [receivedUser, setReceivedUser] = useState(null as UserType | null);
  useEffect(() => {
    (async () => {
      const user = await userHandler.GetUser();
      setReceivedUser(() => {
        setIsLoading(false)
        return user
      })
    })()
  }, [])
  return (
    <userContext.Provider
      value={{
        user: receivedUser,
        userHandler: userHandler,
        setUser: setReceivedUser,
        isLoading
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export { userContext }