import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, Button, HStack } from 'native-base'
import Container from '../components/Container';
import ButtonWithIcon from '../components/ButtonWithIcon';
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import IconButton from "../components/IconButton";
import Background from '../components/Background';
import Heading from '../components/Heading';
import Text from '../components/Text';
import ScreensParamsList from '../lib/screens';
import SafeAreaView from '../components/SafeAreaView';
import EnterButtons from '../components/EnterButtons';
import AuthModal from '../components/AuthModal';
import { sessionContext } from '../contexts/SessionContext';
import TokensHandler from '../lib/TokensHandler';

const background = require("../assets/background.jpg");

type Props = NativeStackScreenProps<ScreensParamsList, "Home">

function Home({ navigation }: Props): ReactElement {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const { userHandler } = useContext(sessionContext);
  useEffect(() => {
    userHandler.InitializeUser();
  }, [])
  return (
    <>
      <Background
        source={background}
        alt="Bar al anochecer con un cielo estrellado."
      />
      <SafeAreaView>
        <AuthModal
          setIsOpen={setIsOpenAuth}
          isOpen={isOpenAuth}
          onClose={() => setIsOpenAuth(false)}
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
            <Text
              color="gray.200"
            >
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
          <EnterButtons
            enter={
              () => {
                navigation.navigate("Bar");
              }
            }
            auth={() => setIsOpenAuth(true)}
          />
        </Container>
      </SafeAreaView>
    </>
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
