import React from 'react';
import {View, Text} from 'react-native';
import Chichewa from '../hymnsItem/Chichewa';
import English from '../hymnsItem/English';

function HomeScreen() {
    const [nyimbo, setNyimbo] = React.useState(Chichewa)
    const [song, setSong] = React.useState(English)
    
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
export default HomeScreen;
