import React, { createContext, ReactElement } from "react";
import KeywordType from "../models/KeywordType";

interface FiltersProviderProps {
  filters: KeywordType[]
}

const filtersContext = createContext({} as FiltersProviderProps);

interface Props {
  children: ReactElement | ReactElement[]
}

export default function FiltersProvider({ children }: Props) {

  const filters = [
    {
      id: "keyword-1",
      content: "clasicos"
    },
    {
      id: "keyword-2",
      content: "monarquicos"
    },
    {
      id: "keyword-3",
      content: "tropicales"
    },
    {
      id: "keyword-4",
      content: "suaves"
    }
  ] as KeywordType[]
  return (
    <filtersContext.Provider
      value={{
        filters
      }}
    >
      {children}
    </filtersContext.Provider>
  )
}

export { filtersContext }