import React from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/components/screens/HomeScreen';
import SongScreen from './src/components/screens/SongScreen';
import NyimboScreen from './src/components/screens/NyimboScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Song" component={SongScreen} />
          <Stack.Screen name="Nyimbo" component={NyimboScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
