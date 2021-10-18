import React from 'react';
import Home from './screens/Home';
import { useFonts } from '@expo-google-fonts/inter';
import { NativeBaseProvider } from 'native-base';
import Heading from './components/Heading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import ScreensParamsList, { ScreensType } from './lib/screens';
import Bar from './screens/Bar';
import HeaderButtons from './components/HeaderButtons';
import styling from './lib/styling';
import Beverages from './screens/Beverages';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Beverage from './screens/Beverage';
import BeveragesProvider from './contexts/BeveragesContext';
import FiltersProvider from './contexts/FiltersContext';
import Profile from './screens/Profile';
import UserProvider from './contexts/UserContext';
type NavigationProps = NativeStackScreenProps<ScreensParamsList, ScreensType>

export default function App() {

  //The returned value could be used to condition the rendering of our app.
  useFonts({
    "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf")
  });

  const { Navigator, Screen } = createNativeStackNavigator<ScreensParamsList>();

  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <UserProvider>
          <BeveragesProvider>
            <FiltersProvider>
              <NavigationContainer>
                <Navigator>
                  <Screen
                    options={getHomeOptions}
                    name="Home"
                    component={Home}
                  />
                  <Screen
                    name="Profile"
                    component={Profile}
                    options={getHeaderOptions}
                  />
                  <Screen
                    name="Beverages"
                    component={Beverages}
                    options={getHeaderOptions}
                  />
                  <Screen
                    name="Bar"
                    component={Bar}
                    options={getHeaderOptions}
                  />
                  <Screen
                    name="Beverage"
                    component={Beverage}
                    options={getHeaderOptions}
                  />
                </Navigator>
              </NavigationContainer>
            </FiltersProvider>
          </BeveragesProvider>
        </UserProvider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  )
}

function getHomeOptions() {
  return ({
    headerTitle: "",
    headerTransparent: true,
    headerShadowVisible: false,
  })
}


function getHeaderOptions({ navigation, route }: NavigationProps) {
  return ({
    headerStyle: {
      backgroundColor: "#f90"
    },
    headerTintColor: styling.heading.color.hex,
    headerShadowVisible: false,
    headerTitle: () => <Heading color={styling.heading.color.name}>{route.name}</Heading>,
    headerRight: () => <HeaderButtons route={route} navigation={navigation} />
  })
}
