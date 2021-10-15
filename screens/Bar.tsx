import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Box, HStack, ScrollView, SectionList } from 'native-base'
import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../components/Background'
import ButtonWithIcon from '../components/ButtonWithIcon';
import Container from '../components/Container';
import SmallCard from '../components/SmallCard';
import ScreensParamsList from '../lib/screens';
import background, { alt } from "../lib/background";
import beverages from "../mockdb/beverages";

type Props = NativeStackScreenProps<ScreensParamsList, "Bar">


function Bar({ navigation }: Props): ReactElement {
  return (
    <SafeAreaView
      style={{
        flexGrow: 1
      }}
    >
      <Background
        source={background}
        alt={alt}
      />
      <Container>
        <ButtonWithIcon
          shadow
          dir="right"
          name="arrow-right"
          color="white"
          py="1"
          focusColor="amber.300"
          onPress={() => {
            navigation.navigate("Beverages", {
              filters: [
                "clasicos"
              ]
            })
          }}
        >
          Clasicos
        </ButtonWithIcon>
        <ScrollView
          alignSelf="center"
          pt="12"
          w="120%"
          horizontal={true}
        >
          <HStack
            space="8"
            px="10"
          >
            {
              beverages.map(data => (
                <SmallCard
                  name={data.name}
                  image={data.image}
                  onPress={() => {
                    navigation.navigate("Beverage", { data })
                  }}
                />
              ))
            }
          </HStack>
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}

export default Bar
