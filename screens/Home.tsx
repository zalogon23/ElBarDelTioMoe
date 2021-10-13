import { FontAwesome } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ArrowForwardIcon, Box, Container, Button, HStack, Image, Icon } from 'native-base'
import React, { ReactElement } from 'react'
import IconButton from "../components/IconButton";
import Background from '../components/Background';
import Heading from '../components/Heading';
import Text from '../components/Text';
import ScreensParamsList from '../lib/screens';
const background = require("../assets/background.jpg");

type Props = NativeStackScreenProps<ScreensParamsList, "Home">

function Home({ navigation }: Props): ReactElement {
  return (
    <Box
      flexGrow={1}
    >
      <Background
        source={background}
        alt="Bar al anochecer con un cielo estrellado."
      />
      <Container
        mx="auto"
        alignItems="center"
        py="8"
        px="4"
      >
        <Heading
          color="white"
          textAlign="center"
        >El Bar del Tio Moe
        </Heading>
        <Box
          mt="8"
          bg="#000"
          p="4"
          borderRadius="md"
          opacity={0.5}
        >
          <Text>
            Si querés saber las últimas recetas de cocktailes, date una vuelta!
          </Text>
        </Box>
        <HStack
          p="4"
          space="2"
          justifyContent="center"
        >
          <CircleIconButton />
          <CircleIconButton />
          <CircleIconButton />
          <CircleIconButton />
        </HStack>
        <Button
          mt="8"
          colorScheme="amber"
          rightIcon={<ArrowForwardIcon />}
          onPress={() => {
            navigation.navigate("Bar");
          }}
        >
          <Text>Entrar</Text>
        </Button>
      </Container>
    </Box >
  )
}

function CircleIconButton() {
  return (
    <IconButton
      name="circle"
      color="white"
      focusColor="amber.500"
      initialOpacity={0.5}
    />
  )
}

export default Home
