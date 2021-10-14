import { HStack } from 'native-base';
import React, { ReactElement, useState } from 'react'
import FilterBadge from './FilterBadge';

interface Props {
  filters: string[],
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

function FiltersShelf({ filters, setFilters }: Props): ReactElement {
  return (
    <HStack
      py="4"
      w="100%"
      flexWrap="wrap"
      space="3"
    >
      {
        filters.map(content => (
          <FilterBadge
            key={content}
            onPress={() => {
              setFilters(filters.filter(filt => filt !== content))
            }}
            mb="3"
          >
            {content}
          </FilterBadge>
        ))
      }
    </HStack>
  )
}

export default FiltersShelf
