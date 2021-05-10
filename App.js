import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "./screens/WelcomeScreen";
import WorldMap from "./screens/WorldMap";
import DailySightings from "./screens/DailySightings";


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="WorldMap" component={WorldMap} />
        <Stack.Screen name="DailySightings" component={DailySightings} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;