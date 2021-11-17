import { Badge, Box, Pressable } from 'native-base'
import React, { ReactElement, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import styling from '../lib/styling'
import FontAwesomeIcon from './FontAwesomeIcon'
import Text from './Text'

interface Props {
  onPress: (() => any) | undefined,
  changeOnPress?: boolean,
  removable: boolean,
  icon?: boolean,
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function FilterBadge({
  onPress = undefined,
  changeOnPress = false,
  icon = false,
  removable,
  children,
  ...props }: Props): ReactElement {
  const [pressed, setPressed] = useState(false);

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={() => {
          onPress();
          if (changeOnPress) setPressed(!pressed);
        }}
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
        bg={pressed ? "amber.500" : icon ? "amber.300" : "amber.400"}
        flexDirection="row"
        {...props}
      >
        {icon
          ?
          <>
            <Text
              color="black"
              pr="2"
              fontWeight="bold"
            >
              Elegir
            </Text>
            {children}
          </>
          :
          <Text
            color="black"
            pr={removable ? "2" : "0"}
          >
            {children}
          </Text>}
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
