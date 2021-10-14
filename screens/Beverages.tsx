import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, ScrollView, VStack } from 'native-base'
import React, { ReactElement, useState } from 'react'
import Background from '../components/Background';
import Bigcard from '../components/Bigcard';
import Container from '../components/Container';
import FiltersShelf from '../components/FiltersShelf';
import Heading from '../components/Heading';
import ScreensParamsList from '../lib/screens';
const background = require("../assets/bar.png");


type Props = NativeStackScreenProps<ScreensParamsList, "Beverages">

function Beverages({ route }: Props): ReactElement {
  const paramsFilters = route?.params?.filters || ["clasicos", "populares", "modernos"];
  const [filters, setFilters] = useState(paramsFilters);
  return (
    <Box
      flexGrow={1}
    >
      <Background
        source={background}
        alt="Pared del bar con raspones que recuerdan al rostro de algun personaje."
      />
      <Container>
        <FiltersShelf
          filters={filters}
          setFilters={setFilters}
        />
        <ScrollView
        w="100%"
        h="15rem"
        borderTopColor="amber.500"
        borderTopWidth="3"
        >
          <VStack
            w="100%"
            pb="10"
            space="16"
            alignItems="center"
          >
            <Bigcard />
            <Bigcard />
            <Bigcard />
            <Bigcard />
          </VStack>
        </ScrollView>
      </Container>
    </Box>
  )
}

export default Beverages
