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
import { filtersContext } from '../contexts/FiltersContext';

type Props = NativeStackScreenProps<ScreensParamsList, "Bebidas">

function Beverages({ navigation, route }: Props): ReactElement {
  const paramsFilters = route?.params?.filters ?? [];
  const [filters, setFilters] = useState(paramsFilters);

  const { applyFilters, beverages, isLoading } = useContext(beveragesContext)
  const [showFilters, setShowFilters] = useState(false);
  const { filters: filterOptions } = useContext(filtersContext)

  useEffect(() => {
    applyFilters(filters)
  }, [filters])

  return (
    <>
      <Background
        source={background}
        alt={alt}
      />
      <SafeAreaView>
        <FiltersShelf
        bg="amber.200"
          removable
          filters={filters}
          setFilters={setFilters}
          addFilter={() => setShowFilters(!showFilters)}
        />
        {
          isLoading
            ?
            <Loading />
            :
            <Container>
              <CheckboxModal
                open={showFilters}
                setOpen={setShowFilters}
                values={filterOptions}
                alreadyCheckedValues={filters}
                action={values => {
                  setFilters(values)
                  setShowFilters(false)
                }}
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
                        navigation.navigate("Bebida", { data })
                      }}
                      image={data.image}
                      name={data.name}
                      description={data.description}
                    />))
                }
              </VStack>
            </Container>
        }
      </SafeAreaView>
    </>
  )
}

export default Beverages
