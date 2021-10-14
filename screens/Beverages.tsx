import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box } from 'native-base'
import React, { ReactElement, useState } from 'react'
import Background from '../components/Background';
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
        <Heading>
          Beverages
        </Heading>
        <FiltersShelf
          filters={filters}
          setFilters={setFilters}
        />
      </Container>
    </Box>
  )
}

export default Beverages
