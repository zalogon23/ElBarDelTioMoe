import { Badge, Pressable } from 'native-base'
import React, { ReactElement } from 'react'
import { TouchableOpacity } from 'react-native'
import styling from '../lib/styling'
import FontAwesomeIcon from './FontAwesomeIcon'
import Text from './Text'

interface Props {
  onPress: (() => any) | undefined,
  removable: boolean,
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function FilterBadge({
  onPress = undefined,
  removable,
  children,
  ...props }: Props): ReactElement {

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
      >
        <BadgeInactive />
      </TouchableOpacity>
    )
  } else {
    return (
      <BadgeInactive />
    )
  }

  function BadgeInactive() {
    return (
      <Badge
        bg="amber.400"
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
          <FontAwesomeIcon
            size={styling.font.small}
            name="times"
          />
        }
      </Badge>
    )
  }
}

export default FilterBadge
