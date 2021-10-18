import React, { createContext, ReactElement, useEffect, useState } from "react";
import UserType from "../models/UserType";
import user from "../mockdb/user"

interface Props {
  children: ReactElement | ReactElement[]
}

interface UserContextProps {
  user: UserType | null,
  isLoading: boolean
}

const userContext = createContext({} as UserContextProps);

export default function UserProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [receivedUser, setReceivedUser] = useState(null as UserType | null);
  useEffect(() => {
    (async () => {
      const asyncUser = await getUser()
      setReceivedUser(() => {
        setIsLoading(false)
        return asyncUser
      })
    })()
  }, [])
  return (
    <userContext.Provider
      value={{
        user: receivedUser,
        isLoading
      }}
    >
      {children}
    </userContext.Provider>
  )

  async function getUser(): Promise<UserType | null> {
    return user
  }
}

export { userContext }