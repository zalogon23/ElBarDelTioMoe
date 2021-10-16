import { FontAwesome } from '@expo/vector-icons'
import { Button, Icon } from 'native-base'
import React, { ReactElement } from 'react'
import FontAwesomeIcon from './FontAwesomeIcon'
import Heading from './Heading'
import Text from './Text'

interface Props {
  name: string,
  color: string,
  shadow?: boolean,
  titleColor?: string,
  focusColor: string,
  colorScheme?: string,
  initialOpacity?: number,
  size?: "big" | "small",
  dir: "left" | "right",
  onPress?: () => any,
  children: string | ReactElement | ReactElement[],
  [props: string]: any
}

function ButtonWithIcon({
  shadow = false,
  children,
  name,
  color,
  titleColor = "white",
  colorScheme = "amber",
  dir,
  size = "big",
  focusColor,
  initialOpacity = 1,
  onPress = () => { },
  ...props }: Props): ReactElement {
  return (
    <Button
      colorScheme={colorScheme}
      onPress={onPress}
      leftIcon={
        dir === "left" ?
          <FontAwesomeIcon
            name={name}
            size={size == "big" ? "md" : "xs"}
          />
          : undefined
      }
      rightIcon={
        dir === "right" ?
          <FontAwesomeIcon
          size={size == "big" ? "md" : "xs"}
            name={name}
          />
          : undefined
      }
      color={color}
      opacity={initialOpacity}
      _focus={{
        opacity: 1,
        color: focusColor
      }}
      style={shadow ? {
        shadowColor: "#0005",
        shadowOffset: {
          width: -6,
          height: 6
        }
      } : {}}
      {...props}
    >
      {
        size == "big"
          ?
          <Heading
            color={titleColor}
          >
            {children}
          </Heading>
          :
          <Text
            color={titleColor}
          >
            {children}
          </Text>
      }
    </Button>
  )
}

export default ButtonWithIcon
