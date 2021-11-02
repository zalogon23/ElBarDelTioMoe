import gql from "graphql-tag";
import React, { createContext, ReactElement, useEffect, useState } from "react"
import client from "../lib/apolloClient";
import queries from "../lib/queries";
import beveragesDB from "../mockdb/beverages";
import BeverageType, { BeverageCompleteType } from "../models/BeverageType";
import ClassificationType from "../models/ClassificationType";
import KeywordType from "../models/KeywordType";

interface BeverageProviderProps {
  applyFilters: (filters: string[]) => void,
  isLoading: boolean,
  beverages: BeverageCompleteType[],
  filteredBeverages: BeverageCompleteType[]
}

const beveragesContext = createContext({} as BeverageProviderProps);

interface Props {
  children: ReactElement
}

export default function BeveragesProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true)
  const [beverages, setBeverages] = useState([] as BeverageCompleteType[])
  const [filteredBeverages, setFilteredBeverages] = useState([] as BeverageCompleteType[])

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      const beverages = (await client.query({
        query: queries.getBeverages
      }))?.data?.beverages as BeverageType[] | null

      const keywords = (await client.query({
        query: queries.getKeywords
      }))?.data?.keywords as KeywordType[] | null

      const classifications = (await client.query({
        query: queries.getClassifications
      }))?.data?.classifications as ClassificationType[] | null

      if (!!beverages && !!classifications && !!keywords) {
        const completeBeverages = getCompleteBeverages(beverages, classifications, keywords);
        setBeverages(completeBeverages);
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

  function getCompleteBeverages(
    beverages: BeverageType[],
    classifications: ClassificationType[],
    keywords: KeywordType[]):
    BeverageCompleteType[] {
    const completeBeverages: BeverageCompleteType[] = [...beverages.map(bev => {
      const completeBeverage: BeverageCompleteType = {
        ...bev,
        keywords: [],
        instructions: [],
        ingredients: []
      };
      return completeBeverage;
    })];
    classifications.forEach(classification => {
      const index = completeBeverages.findIndex(x => x.id === classification.beverageId);
      const keyword = keywords.find(x => x.id === classification.keywordId);
      if (keyword) completeBeverages[index].keywords.push(keyword);
    });
    return completeBeverages;
  }
}
export { beveragesContext }