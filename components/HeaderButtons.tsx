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
    pr="2"
    >
      <IconButton
        name="search"
        color={styling.heading.color.name}
        focusColor="white"
        p="2"
        size="sm"
        onPress={() => navigation.navigate("Beverages", { filters: [] })}
      />
      <IconButton
        name="flask"
        color={styling.heading.color.name}
        focusColor="white"
        p="2"
        size="sm"
      />
      <IconButton
        name="user"
        color={styling.heading.color.name}
        focusColor="white"
        p="2"
        size="sm"
      />
    </HStack>
  )
}

export default HeaderButtons
