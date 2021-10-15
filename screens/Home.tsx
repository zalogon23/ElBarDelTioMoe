import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Container, Button, HStack } from 'native-base'
import ButtonWithIcon from '../components/ButtonWithIcon';
import React, { ReactElement } from 'react'
import IconButton from "../components/IconButton";
import Background from '../components/Background';
import Heading from '../components/Heading';
import Text from '../components/Text';
import ScreensParamsList from '../lib/screens';
import { SafeAreaView } from 'react-native-safe-area-context';
const background = require("../assets/background.jpg");

type Props = NativeStackScreenProps<ScreensParamsList, "Home">

function Home({ navigation }: Props): ReactElement {
  return (
    <SafeAreaView
    style={{
      flexGrow: 1
    }}
    >
        <Background
          source={background}
          alt="Bar al anochecer con un cielo estrellado."
        />
        <Container
          mx="auto"
          alignItems="center"
          pt="20"
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
          <ButtonWithIcon
            shadow
            dir="right"
            name="arrow-right"
            color="white"
            py="2"
            mt="8"
            focusColor="amber.300"
            onPress={() => {
              navigation.navigate("Bar");
            }}
          >
            Entrar
          </ButtonWithIcon>

        </Container>
    </SafeAreaView>
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
