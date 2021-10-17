import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, ScrollView, VStack, Button } from 'native-base'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import SafeAreaView from '../components/SafeAreaView';
import Background from '../components/Background';
import Bigcard from '../components/Bigcard';
import Container from '../components/Container';
import FiltersShelf from '../components/FiltersShelf';
import Heading from '../components/Heading';
import ScreensParamsList from '../lib/screens';
import background, { alt } from "../lib/background";
import CheckboxModal from '../components/CheckboxModal';
import { beveragesContext } from '../contexts/BeveragesContext';
import Loading from '../components/Loading';

type Props = NativeStackScreenProps<ScreensParamsList, "Beverages">

function Beverages({ navigation, route }: Props): ReactElement {
  const paramsFilters = route?.params?.filters ?? [];
  const [filters, setFilters] = useState(paramsFilters);

  const { applyFilters, beverages, isLoading } = useContext(beveragesContext)
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    applyFilters(filters)
  }, [filters])

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
          values={["clasicos", "monarquicos"]}
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
            isLoading
              ?
              <Loading />
              :
              beverages.map(data => (
                <Bigcard
                  key={data.id}
                  onPress={() => {
                    navigation.navigate("Beverage", { data })
                  }}
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
