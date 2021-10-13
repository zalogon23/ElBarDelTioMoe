import { FontAwesome } from '@expo/vector-icons'
import { Icon, IconButton as NativeIconButton } from 'native-base'
import React, { ReactElement } from 'react'

interface Props {
  name: string,
  color: string,
  focusColor: string,
  initialOpacity?: number,
  size?: string,
  onPress?: () => any,
  [props: string]: any
}

function IconButton({
  name,
  color,
  focusColor,
  onPress = () => { },
  initialOpacity = 1,
  size = "xs",
  ...props }: Props): ReactElement {
  return (
    <NativeIconButton
      onPress={onPress}
      _icon={{
        color,
        opacity: initialOpacity,
        size
      }}
      _focus={{
        _icon: {
          opacity: 1,
          color: focusColor
        }
      }}
      {...props}
      icon={
        <Icon
          as={FontAwesome}
          name={name}
        />
      }
    />
  )
}

export default IconButton
