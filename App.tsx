import React from 'react';
import Home from './screens/Home';
import { useFonts } from '@expo-google-fonts/inter';
import { HStack, NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import ScreensParamsList, { ScreensType } from './lib/screens';
import Bar from './screens/Bar';
import { FontAwesome } from '@expo/vector-icons';
import IconButton from './components/IconButton';
import HeaderButtons from './components/HeaderButtons';
type NavigationProps = NativeStackScreenProps<ScreensParamsList, ScreensType>

export default function App() {

  //The returned value could be used to condition the rendering of our app.
  useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf")
  });

  const { Navigator, Screen } = createNativeStackNavigator<ScreensParamsList>();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Bar"
            component={Bar}
            options={getBarOptions}
          />
          <Screen
            options={getHomeOptions}
            name="Home"
            component={Home} />
        </Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}

function getHomeOptions() {
  return ({
    headerTitle: "",
    headerTransparent: true,
    headerShadowVisible: false,
  })
}


function getBarOptions({ navigation, route }: NavigationProps) {
  return ({
    headerStyle: {
      backgroundColor: "#cc8f00"
    },
    headerTintColor: "#fd4",
    headerShadowVisible: false,
    headerRight: () => <HeaderButtons route={route} navigation={navigation} />
  })
}
