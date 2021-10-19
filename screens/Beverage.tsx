import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import Background from '../components/Background';
import Container from '../components/Container';
import ScreensParamsList from '../lib/screens'
import background, { alt } from "../lib/background";
import Heading from '../components/Heading';
import beverages from '../mockdb/beverages';
import SafeAreaView from '../components/SafeAreaView';
import FiltersShelf from '../components/FiltersShelf';
import Text from '../components/Text';
import Note from '../components/Note';
import LineCardStack from '../components/LineCardStack';
import BeverageType from '../models/BeverageType';
import MainImage from "../components/MainImage"
import { Box } from 'native-base';

type Props = NativeStackScreenProps<ScreensParamsList, "Bebida">;

function Beverage({ navigation, route }: Props): ReactElement {

  const beverage = route?.params?.data ?? beverages[0];
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
        <Container>
          <Note
            py="3"
            px="3"
          >
            <Heading>{beverage.name}</Heading>
          </Note>
          <MainImage
            alt={beverage.name}
            mt="10"
            image={beverage.image}
          />
          <FiltersShelf
            filters={beverage.keywords.map(keyword => keyword.content)}
            removable={false}
          />
          <Note
            shadow
            mt="6"
          >
            <Heading
              mb="2"
            >Descripción</Heading>
            <Text>
              {beverage.description}
            </Text>
          </Note>
          <Note
            shadow
            bg="amber.300"
            mt="6"
          >
            <Heading>Ingredientes</Heading>
            <LineCardStack
              donable={false}
              items={beverage.ingredients}
            />
          </Note>
          <Note
            shadow
            mt="6"
            bg="amber.500"
            mb="4"
          >
            <Heading>Instrucciones</Heading>
            <LineCardStack
              donable
              items={beverage.instructions}
            />
          </Note>
        </Container>
      </SafeAreaView>
    </>
  )
}

function Ingredients({ beverage }: { beverage: BeverageType }): ReactElement {
  return (
    <>
      {
        beverage.ingredients.map((ingredient): ReactElement => (
          <Note
            px="3"
            py="3"
            bg="amber.400"
          >
            <Text>{ingredient.product}</Text>
          </Note>
        ))
      }
    </>
  )
}

export default Beverage
