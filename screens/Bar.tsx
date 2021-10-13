import { Box, Container, HStack, ScrollView, SectionList } from 'native-base'
import React, { ReactElement } from 'react'
import Background from '../components/Background'
import ButtonWithIcon from '../components/ButtonWithIcon';
import Heading from '../components/Heading';
import SmallCard from '../components/SmallCard';
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
        pt="10"
        w="100%"
        flexGrow={1}
      >
        <ButtonWithIcon
          dir="right"
          name="arrow-right"
          color="white"
          py="1"
          focusColor="amber.300"
          style={{
            shadowColor: "#0005",
            shadowOffset: {
              width: -6,
              height: 6
            }
          }}
        >
          Clasicos
        </ButtonWithIcon>
        <ScrollView
          alignSelf="center"
          pt="12"
          w="120%"
          horizontal={true}
        >
          <HStack
            space="8"
            px="10"
          >
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </HStack>
        </ScrollView>
      </Container>
    </Box>
  )
}

export default Bar
