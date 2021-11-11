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
import { userContext } from '../contexts/UserContext';
import { tokensContext } from '../contexts/TokensContext';
import client, { serverUrl } from '../lib/apolloClient';
import { TokensLoginDto } from '../models/Tokens';
import queries from '../lib/queries';
import UserType from '../models/UserType';
const background = require("../assets/background.jpg");

type Props = NativeStackScreenProps<ScreensParamsList, "Home">

function Home({ navigation }: Props): ReactElement {
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const { setUser, setIsLoading } = useContext(userContext);
  const { getRefreshToken, storeToken, storeRefreshToken } = useContext(tokensContext);
  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const refreshToken = await getRefreshToken();
      if (refreshToken.length) {
        const result = await fetch(serverUrl + "/refresh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ refreshToken })
        });
        const tokens = await result.json() as TokensLoginDto;
        if (tokens.token && tokens.refreshToken) {
          storeToken(tokens.token)
          storeRefreshToken(tokens.refreshToken)
        }
        const graphResult = await client.query({
          query: queries.getSelf,
          context: {
            headers: {
              "Authorization": `bearer ${tokens.token}`
            }
          }
        });
        const user = graphResult.data?.self as UserType | null;
        setUser(user);
      }
      setIsLoading(false);
    })()
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
