import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, ScrollView, VStack } from 'native-base'
import React, { ReactElement, useState } from 'react'
import SafeAreaView from '../components/SafeAreaView';
import Background from '../components/Background';
import Bigcard from '../components/Bigcard';
import Container from '../components/Container';
import FiltersShelf from '../components/FiltersShelf';
import Heading from '../components/Heading';
import ScreensParamsList from '../lib/screens';
import background, { alt } from "../lib/background";
import beverages from "../mockdb/beverages"

type Props = NativeStackScreenProps<ScreensParamsList, "Beverages">

function Beverages({ navigation, route }: Props): ReactElement {
  const paramsFilters = route?.params?.filters;
  const [filters, setFilters] = useState(paramsFilters);
  return (
    <SafeAreaView>
      <Background
        source={background}
        alt={alt}
      />
      <Container>
        <FiltersShelf
          removable
          filters={filters}
          setFilters={setFilters}
        />
        <VStack
          w="100%"
          pb="10"
          space="16"
          alignItems="center"
        >
          {
            beverages.map(data => (
              <Bigcard
                key={data.id}
                onPress={() => {
                  navigation.navigate("Beverage", { data })
                }}
                id={data.id}
                image={data.image}
                name={data.name}
                description={data.description}
              />
            ))
          }
        </VStack>
      </Container>
    </SafeAreaView>
  )
}

export default Beverages
