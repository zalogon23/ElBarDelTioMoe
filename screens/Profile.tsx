import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, Button, HStack, ScrollView } from 'native-base'
import React, { ReactElement, useContext } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import Note from '../components/Note'
import SafeAreaView from '../components/SafeAreaView'
import { sessionContext } from '../contexts/SessionContext'
import ScreensParamsList from '../lib/screens'
import MainImage from "../components/MainImage"
import Text from '../components/Text'
import SmallCard from '../components/SmallCard'
import { BeverageGraphType } from '../models/BeverageType'

type Props = NativeStackScreenProps<ScreensParamsList, "Perfil">

function Profile({
  navigation,
  route
}: Props): ReactElement {

  const { userHandler, isLoading } = useContext(sessionContext)

  return (
    <>
      <Box
        position="absolute"
        zIndex={-1}
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="amber.700"
      />
      <SafeAreaView>
        {
          isLoading || !userHandler.User
            ?
            <Loading />
            :
            <Container>
              {
                userHandler.Online
                  ?
                  <Button
                    onPress={() => {
                      userHandler.Logout();
                      navigation.navigate("Home");
                    }}
                  >
                    Logout
                  </Button>
                  :
                  <></>
              }
              <Note
                shadow
                bg="amber.500"
                py="3"
                px="3"
                mb="6"
              >
                <Heading
                  color="white"
                >{userHandler.User.username}</Heading>
              </Note>
              <MainImage
                mb="6"
                alt={userHandler.User.username}
                image={userHandler.User.avatar}
              />
              <Note
                shadow
                mb="6"
              >
                <Text>{userHandler.User.description}</Text>
              </Note>
              <Note
                mb="6"
                bg="amber.400"
                shadow
                alignItems="center"
              >
                <Heading
                  mb="5"
                >Bebidas Favoritas</Heading>
                <CardsSlider>
                  {getBeveragesCards(userHandler.User.favoriteBeverages)}
                </CardsSlider>
              </Note>
              <Note
                bg="amber.500"
                mb="6"
                shadow
                alignItems="center"
              >
                <Heading
                  color="white"
                  mb="5"
                >Bebidas Creadas</Heading>
                <CardsSlider>
                  {getBeveragesCards(userHandler.User.createdBeverages)}
                </CardsSlider>
              </Note>
            </Container>
        }
      </SafeAreaView>
    </>
  )

  function getBeveragesCards(beverages: BeverageGraphType[]): ReactElement[] {
    const cards = beverages.map(data => (
      <SmallCard
        key={data.id}
        shadow
        name={data.name}
        image={data.image}
        onPress={() => {
          navigation.navigate("Bebida", { id: data.id })
        }}
      />
    )) as ReactElement[]
    return cards
  }
  function CardsSlider({ children }: { children: ReactElement | ReactElement[] }) {
    return (
      <ScrollView
        horizontal
      >
        <HStack
          space={4}>
          {children}
        </HStack>
      </ScrollView>
    )
  }
}

export default Profile
