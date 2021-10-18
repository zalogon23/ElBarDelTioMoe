import React, { createContext, ReactElement, useEffect, useState } from "react"
import beveragesDB from "../mockdb/beverages";
import BeverageType from "../models/BeverageType";

interface BeverageProviderProps {
  applyFilters: (filters: string[]) => void,
  isLoading: boolean,
  beverages: BeverageType[]
}

const beveragesContext = createContext({} as BeverageProviderProps);

interface Props {
  children: ReactElement
}

export default function BeveragesProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [beverages, setBeverages] = useState([] as BeverageType[])

  return (
    <beveragesContext.Provider
      value={{
        applyFilters,
        isLoading,
        beverages
      }}
    >
      {children}
    </beveragesContext.Provider>
  )

  function applyFilters(filters: string[]) {
    setIsLoading(true)
    if (!filters.length) {
      setBeverages(() => {
        setIsLoading(false);
        return beveragesDB
      })
    } else {
      setBeverages(() => {
        setIsLoading(false)
        return beveragesDB.filter(bev => bev.keywords.find(keyword => filters.includes(keyword.content)))
      })
    }
  }
}
export { beveragesContext }