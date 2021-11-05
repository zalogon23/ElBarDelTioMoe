import React, { createContext, ReactElement, useEffect, useState } from "react";
import UserType from "../models/UserType";
import UserHandler from "../lib/UserHandler";

interface Props {
  children: ReactElement | ReactElement[]
}

interface UserContextProps {
  user: UserType | null,
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>,
  isLoading: boolean
}

const userContext = createContext({} as UserContextProps);

export default function UserProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [receivedUser, setReceivedUser] = useState(null as UserType | null);
  useEffect(() => {
    (async () => {
      const user = await UserHandler.GetUser();
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
        setUser: setReceivedUser,
        isLoading
      }}
    >
      {children}
    </userContext.Provider>
  )
}

export { userContext }