import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import Background from '../components/Background';
import Container from '../components/Container';
import ScreensParamsList from '../lib/screens'
import background, { alt } from "../lib/background";
import Heading from '../components/Heading';
import beverages from '../mockdb/beverages';
import { Box, Image, VStack } from 'native-base';
import SafeAreaView from '../components/SafeAreaView';
import FiltersShelf from '../components/FiltersShelf';
import Text from '../components/Text';
import Note from '../components/Note';
import LineCardStack from '../components/LineCardStack';
import BeverageType from '../models/BeverageType';

type Props = NativeStackScreenProps<ScreensParamsList, "Beverage">;

function Beverage({ navigation, route }: Props): ReactElement {

  const beverage = route?.params?.data ?? beverages[0];
  return (
    <SafeAreaView>
      <Background
        source={background}
        alt={alt}
      />
      <Container>
        <Heading
          color="white"
        >{beverage.name}
        </Heading>
        <BeverageImage
          mt="10"
          image={beverage.image}
        />
        <FiltersShelf
          filters={beverage.keywords.map(keyword => keyword.content)}
          removable={false}
        />
        <Note
          shadow>
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

function BeverageImage({ image, ...props }: {
  image: string,
  [props: string]: any
}): ReactElement {
  return (
    <Box
      style={{
        shadowColor: "#0005",
        shadowOffset: {
          width: -5,
          height: 5
        }
      }}
      rounded="md"
      alignSelf="center"
      w="100%"
      h={["15rem", "25rem"]}
      {...props}
    >
      <Image
        w="100%"
        h={["15rem", "25rem"]}
        rounded="md"
        source={{ uri: image }}
      />
    </Box>
  )
}

export default Beverage
