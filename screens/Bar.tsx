import { Box, Container } from 'native-base'
import React, { ReactElement } from 'react'
import Background from '../components/Background'
import ButtonWithIcon from '../components/ButtonWithIcon';
import Heading from '../components/Heading';
const background = require("../assets/bar.png");

function Bar(): ReactElement {
  return (
    <Box
      flexGrow={1}
    >
      <Background
        source={background}
        alt="Pared del bar con raspones que recuerdan al rostro de algun personaje."
      />
      <Container
        mx="auto"
        py="8"
        w="100%"
        flexGrow={1}
      >
        <Heading
          color="white"
        >
          <ButtonWithIcon
            dir="right"
            name="arrow-right"
            color="white"
            py="1"
            focusColor="amber.300"
          >
            Clasicos
          </ButtonWithIcon>
        </Heading>
      </Container>
    </Box>
  )
}

export default Bar
