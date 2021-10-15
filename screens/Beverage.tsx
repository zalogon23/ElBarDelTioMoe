import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { ReactElement } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Background from '../components/Background';
import Container from '../components/Container';
import ScreensParamsList from '../lib/screens'
import background, { alt } from "../lib/background";
import Heading from '../components/Heading';

type Props = NativeStackScreenProps<ScreensParamsList, "Beverage">;

function Beverage({ navigation, route }: Props): ReactElement {

  const beverage = route?.params?.data;
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
        <Heading>{beverage.name}</Heading>
      </Container>
    </SafeAreaView>
  )
}

export default Beverage
