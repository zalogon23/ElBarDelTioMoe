import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { HStack } from 'native-base'
import React, { ReactElement } from 'react'
import ScreensParamsList, { ScreensType } from '../lib/screens'
import IconButton from './IconButton'

type Props = NativeStackScreenProps<ScreensParamsList, ScreensType>

function HeaderButtons({ navigation }: Props): ReactElement {
  return (
    <HStack>
      <IconButton
        name="search"
        color="amber.300"
        focusColor="white"
        p="2"
        size="sm"
      />
      <IconButton
        name="flask"
        color="amber.300"
        focusColor="white"
        p="2"
        size="sm"
      />
      <IconButton
        name="user"
        color="amber.300"
        focusColor="white"
        p="2"
        size="sm"
      />
    </HStack>
  )
}

export default HeaderButtons
