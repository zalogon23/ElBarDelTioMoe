import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box } from 'native-base'
import React, { ReactElement, useContext } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import SafeAreaView from '../components/SafeAreaView'
import { userContext } from '../contexts/UserContext'
import ScreensParamsList from '../lib/screens'

type Props = NativeStackScreenProps<ScreensParamsList, "Profile">

function Profile({
  navigation,
  route
}: Props): ReactElement {

  const { user, isLoading } = useContext(userContext)

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
      {
        isLoading
          ?
          <Loading />
          :
          <Container>
            <Heading>Perfil</Heading>
          </Container>
      }
    </SafeAreaView>
  )
}

export default Profile
