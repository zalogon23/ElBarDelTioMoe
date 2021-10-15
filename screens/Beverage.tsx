import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import Background from '../components/Background';
import Container from '../components/Container';
import ScreensParamsList from '../lib/screens'
import background, { alt } from "../lib/background";
import Heading from '../components/Heading';
import beverages from '../mockdb/beverages';
import { Box, Image } from 'native-base';
import SafeAreaView from '../components/SafeAreaView';

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
          image={beverage.image}
        />
      </Container>
    </SafeAreaView>
  )
}

function BeverageImage({ image }: { image: string }) {
  return (
    <Box
      style={{
        shadowColor: "#0005",
        shadowOffset: {
          width: -5,
          height: 5
        }
      }}
      mt="4"
      rounded="md"
      overflow="hidden"
      w="100%"
      h="15rem"
    >
      <Image
        w="100%"
        h="15rem"
        source={{ uri: image }}
      />
    </Box>
  )
}

export default Beverage
