import { HStack } from 'native-base';
import React, { ReactElement, useState } from 'react'
import styling from '../lib/styling';
import FilterBadge from './FilterBadge';
import FontAwesomeIcon from './FontAwesomeIcon';

interface Props {
  filters: string[],
  addFilter?: () => any,
  removable: boolean,
  setFilters?: React.Dispatch<React.SetStateAction<string[]>>,
  [props: string]: any
}

function FiltersShelf({
  filters,
  setFilters = undefined,
  addFilter = () => { },
  removable,
  ...props
}: Props): ReactElement {
  return (
    <HStack
      py="4"
      w="100%"
      flexWrap="wrap"
      space="3"
      {...props}
    >
      {
        filters.map(content => (
          <FilterBadge
            removable={removable}
            key={content}
            onPress={
              setFilters ?
                () => {
                  setFilters(filters.filter(filt => filt !== content))
                }
                :
                undefined
            }
            mb="3"
          >
            {content}
          </FilterBadge>
        ))
      }
      {
        removable &&
        <FilterBadge
          removable={false}
          onPress={addFilter}
          icon
          mb="3"
        >
          <FontAwesomeIcon
            name="plus"
            size={styling.font.small}
          />
        </FilterBadge>
      }
    </HStack>
  )
}

export default FiltersShelf
