import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HStack } from 'native-base'
import React, { ReactElement } from 'react'
import ScreensParamsList, { ScreensType } from '../lib/screens'
import styling from '../lib/styling'
import IconButton from './IconButton'

type Props = NativeStackScreenProps<ScreensParamsList, ScreensType>

function HeaderButtons({ navigation }: Props): ReactElement {
  return (
    <HStack
      pr="1"
    >
      <IconButton
        name="search"
        color={styling.heading.color.name}
        focusColor="white"
        size="sm"
        onPress={() => navigation.navigate("Bebidas", { filters: [] })}
      />
      <IconButton
        name="flask"
        color={styling.heading.color.name}
        focusColor="white"
        size="sm"
        onPress={() => navigation.navigate("Lab")}
      />
      <IconButton
        name="user-circle"
        color={styling.heading.color.name}
        focusColor="white"
        size="sm"
        onPress={() => navigation.navigate("Perfil")}
      />
    </HStack>
  )
}

export default HeaderButtons
