import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, ScrollView, VStack, Button } from 'native-base'
import React, { ReactElement, useContext, useEffect, useState } from 'react'
import SafeAreaView from '../components/SafeAreaView';
import Bigcard from '../components/Bigcard';
import Container from '../components/Container';
import FiltersShelf from '../components/FiltersShelf';
import ScreensParamsList from '../lib/screens';
import CheckboxModal from '../components/CheckboxModal';
import { beveragesContext } from '../contexts/BeveragesContext';
import Loading from '../components/Loading';
import { filtersContext } from '../contexts/FiltersContext';

type Props = NativeStackScreenProps<ScreensParamsList, "Bebidas">

function Beverages({ navigation, route }: Props): ReactElement {
  const paramsFilters = route?.params?.filters ?? [];
  const [filters, setFilters] = useState(paramsFilters);

  const { applyFilters, filteredBeverages, isLoading } = useContext(beveragesContext)
  const [showFilters, setShowFilters] = useState(false);
  const { filters: filterOptions } = useContext(filtersContext)

  useEffect(() => {
    applyFilters(filters)
  }, [filters])

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
        <FiltersShelf
          bg="amber.600"
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

                  filteredBeverages.map(data => (
                    <Bigcard
                      key={data.id}
                      onPress={() => {
                        navigation.navigate("Bebida", { id: data.id });
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
