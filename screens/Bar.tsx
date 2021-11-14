import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, HStack, ScrollView } from 'native-base'
import React, { ReactElement, useContext } from 'react'
import SafeAreaView from '../components/SafeAreaView';
import ButtonWithIcon from '../components/ButtonWithIcon';
import Container from '../components/Container';
import SmallCard from '../components/SmallCard';
import ScreensParamsList from '../lib/screens';
import { beveragesContext } from "../contexts/BeveragesContext";

type Props = NativeStackScreenProps<ScreensParamsList, "Bar">


function Bar({ navigation }: Props): ReactElement {
  const { beverages } = useContext(beveragesContext);
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
        <Container>
          <Box
            alignItems="flex-start"
          >
            <ButtonWithIcon
              shadow
              dir="right"
              name="arrow-right"
              color="white"
              py="1"
              mb="10"
              focusColor="amber.300"
              onPress={() => {
                navigation.navigate("Bebidas", {
                  filters: [
                    "clasicos"
                  ]
                })
              }}
            >
              Clasicos
            </ButtonWithIcon>
          </Box>
          <ScrollView
            flex={1}
            horizontal={true}
          >
            <HStack
              space="6"
              p="4"
            >
              {
                beverages.map(data => (
                  <SmallCard
                    key={data.id}
                    name={data.name}
                    image={data.image}
                    onPress={() => {
                      navigation.navigate("Bebida", { id: data.id });
                    }}
                  />
                ))
              }
            </HStack>
          </ScrollView>
        </Container>
      </SafeAreaView>
    </>
  )
}

export default Bar
