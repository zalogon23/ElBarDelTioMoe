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
  size?: string,
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
  focusColor,
  initialOpacity = 1,
  size = "md",
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
          />
          : undefined
      }
      rightIcon={
        dir === "right" ?
          <FontAwesomeIcon
            name={name}
          />
          : undefined
      }
      color={color}
      opacity={initialOpacity}
      size={size}
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
      <Heading
        color={titleColor}
      >
        {children}
      </Heading>
    </Button>
  )
}

export default ButtonWithIcon
