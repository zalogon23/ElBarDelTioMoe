import { Badge, Pressable } from 'native-base'
import React, { ReactElement } from 'react'
import styling from '../lib/styling'
import FontAwesomeIcon from './FontAwesomeIcon'
import Text from './Text'

interface Props {
  onPress: () => any,
  removable: boolean,
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function FilterBadge({
  onPress,
  removable,
  children,
  ...props }: Props): ReactElement {
  return (
    <Badge
      colorScheme="amber"
      flexDirection="row"
      {...props}
    >
      <Text
        color="black"
        pr="2"
      >
        {children}
      </Text>
      {
        removable &&
        <Pressable
          onPress={onPress}
        >
          <FontAwesomeIcon
            size={styling.font.small}
            name="times"
          />
        </Pressable>
      }
    </Badge>
  )
}

export default FilterBadge
