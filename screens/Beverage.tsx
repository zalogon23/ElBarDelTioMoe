import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
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
import BeverageType, { BeverageGraphType } from '../models/BeverageType';
import MainImage from "../components/MainImage"
import { Box } from 'native-base';
import { beveragesContext } from '../contexts/BeveragesContext';

type Props = NativeStackScreenProps<ScreensParamsList, "Bebida">;

function Beverage({ navigation, route }: Props): ReactElement {
  const { beverages } = useContext(beveragesContext)
  const id = route.params.id ?? "";
  const currentBeverage = beverages.find(x => x.id === id) ?? null;
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
            <Heading>{currentBeverage?.name ?? ""}</Heading>
          </Note>
          <MainImage
            alt={currentBeverage?.name ?? ""}
            mt="10"
            image={currentBeverage?.image ?? ""}
          />
          <FiltersShelf
            filters={currentBeverage?.keywords.map(keyword => keyword.content) ?? []}
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
              {currentBeverage?.description ?? ""}
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
              items={currentBeverage?.ingredients ?? []}
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
              items={[...currentBeverage?.instructions ?? []].sort((a, b) => a?.order - b?.order)}
            />
          </Note>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default Beverage
