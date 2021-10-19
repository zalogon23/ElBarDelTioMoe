import { Box } from 'native-base'
import React, { ReactElement } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import SafeAreaView from '../components/SafeAreaView'

function Lab(): ReactElement {
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="white"
      />
      <SafeAreaView>
        <Container>
          <Heading>El Laboratorio</Heading>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default Lab
