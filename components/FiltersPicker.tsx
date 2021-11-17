import { ScrollView } from 'native-base'
import React, { ReactElement } from 'react'
import KeywordType from '../models/KeywordType';
import FilterBadge from './FilterBadge'

interface Props {
  filters: KeywordType[],
  selectedFilters: KeywordType[],
  setSelectedFilters: React.Dispatch<React.SetStateAction<KeywordType[]>>
}

function FiltersPicker({
  filters,
  selectedFilters,
  setSelectedFilters
}: Props): ReactElement {
  return (
    <ScrollView
      bg="amber.600"
      w="100%"
      p="2"
      horizontal={true}
    >
      {
        filters.map(filt => (
          <FilterBadge
            key={filt.id}
            changeOnPress
            mr="3"
            removable={false}
            onPress={() => {
              if (selectedFilters.find(x => x.id == filt.id)) {
                setSelectedFilters(selectedFilters.filter(x => x.id !== filt.id));
              } else {
                setSelectedFilters([...selectedFilters, filt]);
              }
            }}
          >
            {filt.content}
          </FilterBadge>
        ))
      }
    </ScrollView>
  )
}

export default FiltersPicker
