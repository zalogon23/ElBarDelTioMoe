import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Box, HStack, ScrollView } from 'native-base'
import React, { ReactElement, useContext } from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Loading from '../components/Loading'
import Note from '../components/Note'
import SafeAreaView from '../components/SafeAreaView'
import { userContext } from '../contexts/UserContext'
import ScreensParamsList from '../lib/screens'
import MainImage from "../components/MainImage"
import Text from '../components/Text'
import SmallCard from '../components/SmallCard'
import UserType from '../models/UserType'
import BeverageType from '../models/BeverageType'

type Props = NativeStackScreenProps<ScreensParamsList, "Perfil">

function Profile({
  navigation,
  route
}: Props): ReactElement {

  const { user, isLoading } = useContext(userContext)

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
          isLoading || user === null
            ?
            <Loading />
            :
            <Container>
              <Note
                shadow
                bg="amber.500"
                py="3"
                px="3"
                mb="6"
              >
                <Heading
                  color="white"
                >{user.username}</Heading>
              </Note>
              <MainImage
                mb="6"
                alt={user.username}
                image={user.avatar}
              />
              <Note
                shadow
                mb="6"
              >
                <Text>{user.description}</Text>
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
                  {getBeveragesCards(user.favoriteBeverages)}
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
                  {getBeveragesCards(user.createdBeverages)}
                </CardsSlider>
              </Note>
            </Container>
        }
      </SafeAreaView>
    </>
  )

  function getBeveragesCards(beverages: BeverageType[]): ReactElement[] {
    const cards = beverages.map(bev => (
      <SmallCard
        shadow
        name={bev.name}
        image={bev.image}
        onPress={() => navigation.navigate("Bebida", { data: bev })}
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
