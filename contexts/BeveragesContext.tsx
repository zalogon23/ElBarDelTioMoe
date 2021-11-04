import React, { createContext, ReactElement, useEffect, useState } from "react"
import client from "../lib/apolloClient";
import queries from "../lib/queries";
import { BeverageGraphType } from "../models/BeverageType";

interface BeverageProviderProps {
  applyFilters: (filters: string[]) => void,
  isLoading: boolean,
  beverages: BeverageGraphType[],
  filteredBeverages: BeverageGraphType[]
}

const beveragesContext = createContext({} as BeverageProviderProps);

interface Props {
  children: ReactElement
}

export default function BeveragesProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [beverages, setBeverages] = useState([] as BeverageGraphType[])
  const [filteredBeverages, setFilteredBeverages] = useState([] as BeverageGraphType[])

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const beverages = (await client.query({
        query: queries.getBeverages
      }))?.data?.beverages as BeverageGraphType[] | null

      if (!!beverages) {
        setBeverages(beverages);
      }
      setIsLoading(false);
    })()
  }, [])

  return (
    <beveragesContext.Provider
      value={{
        applyFilters,
        isLoading,
        filteredBeverages,
        beverages
      }}
    >
      {children}
    </beveragesContext.Provider>
  )

  function applyFilters(filters: string[]) {
    setIsLoading(true)
    if (!filters.length) {
      setFilteredBeverages(() => {
        setIsLoading(false);
        return beverages;
      })
    } else {
      setFilteredBeverages(() => {
        setIsLoading(false)
        return beverages.filter(bev => bev.keywords.find(keyword => filters.includes(keyword.content)))
      })
    }
  }
}
export { beveragesContext }