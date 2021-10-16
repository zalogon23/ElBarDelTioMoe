import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, ScrollView, VStack, Button } from 'native-base'
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
import CheckboxModal from '../components/CheckboxModal';

type Props = NativeStackScreenProps<ScreensParamsList, "Beverages">

function Beverages({ navigation, route }: Props): ReactElement {
  const paramsFilters = route?.params?.filters ?? [];
  const [filters, setFilters] = useState(paramsFilters);
  const [showFilters, setShowFilters] = useState(false);
  return (
    <SafeAreaView>
      <Background
        source={background}
        alt={alt}
      />
      <Container>
        <CheckboxModal
          open={showFilters}
          setOpen={setShowFilters}
          values={["clasico", "monarquico"]}
          alreadyCheckedValues={filters}
          action={values => {
            setFilters(values)
            setShowFilters(false)
          }}
        />
        <FiltersShelf
          pt="0"
          pb="10"
          removable
          filters={filters}
          setFilters={setFilters}
          addFilter={() => setShowFilters(!showFilters)}
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
