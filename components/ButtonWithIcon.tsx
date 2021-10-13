import { FontAwesome } from '@expo/vector-icons'
import { Button, Icon } from 'native-base'
import React, { ReactElement } from 'react'
import Heading from './Heading'
import Text from './Text'

interface Props {
  name: string,
  color: string,
  titleColor?: string,
  focusColor: string,
  colorScheme?: string,
  initialOpacity?: number,
  size?: string,
  dir: "left" | "right",
  onPress?: () => any,
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function ButtonWithIcon({
  children,
  name,
  color,
  titleColor = "white",
  colorScheme = "amber",
  dir,
  focusColor,
  initialOpacity = 1,
  size = "md",
  onPress = () => { },
  ...props }: Props): ReactElement {
  return (
    <Button
      colorScheme={colorScheme}
      leftIcon={
        dir === "left" ?
          <Icon
            as={FontAwesome}
            name={name}
          /> : undefined
      }
      rightIcon={
        dir === "right" ?
          <Icon
            as={FontAwesome}
            name={name}
          /> : undefined
      }
      color={color}
      opacity={initialOpacity}
      size={size}
      _focus={{
        opacity: 1,
        color: focusColor
      }}
      {...props}
    >
      <Heading
        color={titleColor}
      >
        {children}
      </Heading>
    </Button>
  )
}

export default ButtonWithIcon
