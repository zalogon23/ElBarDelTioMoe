import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box } from 'native-base'
import React, { ReactElement } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SafeAreaView from '../components/SafeAreaView'
import ScreensParamsList from '../lib/screens'

type Props = NativeStackScreenProps<ScreensParamsList, "Profile">

function Profile({
  navigation,
  route
}: Props): ReactElement {
  return (
    <SafeAreaView>
      <Box
        position="absolute"
        zIndex={-1}
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="amber.200"
      />
      <Container>
        <Heading>Perfil</Heading>
      </Container>
    </SafeAreaView>
  )
}

export default Profile
