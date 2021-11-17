import { Box, Button, Input } from 'native-base'
import React, { ReactElement, useContext, useState } from 'react'
import Container from '../components/Container'
import FiltersPicker from '../components/FiltersPicker'
import FormControl from '../components/FormControl'
import Heading from '../components/Heading'
import SafeAreaView from '../components/SafeAreaView'
import { filtersContext } from '../contexts/FiltersContext'
import KeywordType from '../models/KeywordType'

function Lab(): ReactElement {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([] as KeywordType[]);

  const { filters } = useContext(filtersContext)
  return (
    <>
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bg="white"
      />
      <SafeAreaView>
        <Container>
          <Heading
            mb="10"
          >
            El Laboratorio
          </Heading>
          <FormControl
            label="Nombre"
            helper=""
            errorMessage=""
            value={name}
            onChangeText={(value: string) => setName(value)}
          />
          <FormControl
            label="Descripción"
            helper=""
            errorMessage=""
            value={description}
            onChangeText={(value: string) => setDescription(value)}
          />
          <FormControl
            label="Imagen"
            helper=""
            errorMessage=""
            value={image}
            onChangeText={(value: string) => setImage(value)}
          />
          <FiltersPicker
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
          <Button
            onPress={() => {
              console.log(JSON.stringify({
                name,
                description,
                image,
                keywords: selectedFilters
              }))
            }}
          >Crear!</Button>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default Lab
