import { HStack } from 'native-base';
import React, { ReactElement, useState } from 'react'
import FilterBadge from './FilterBadge';

interface Props {
  filters: string[],
  removable: boolean,
  setFilters: React.Dispatch<React.SetStateAction<string[]>>
}

function FiltersShelf({
  filters,
  setFilters,
  removable }: Props): ReactElement {
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
            removable={removable}
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
