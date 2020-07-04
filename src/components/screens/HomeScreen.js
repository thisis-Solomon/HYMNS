import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Chichewa from '../hymnsItem/Chichewa';
import English from '../hymnsItem/English';
import useHomeHeader from '../customHooks/useHomeHeader';

function HomeScreen() {
  const [nyimbo, setNyimbo] = React.useState(Chichewa);
  const [song, setSong] = React.useState(English);

  // imported states and functions from customHooks
  const isChichewa = useHomeHeader();

  // The vision to be displayed
  const display = isChichewa ? (
    <FlatList
      data={nyimbo}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <Text style={{fontSize: 18, marginHorizontal: 15}}>{item.name}</Text>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{backgroundColor: '#000', height: 1, marginVertical: 10}}
        />
      )}
    />
  ) : (
    <FlatList
      data={song}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <Text style={{fontSize: 18, marginHorizontal: 15}}>{item.name}</Text>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{backgroundColor: '#000', height: 1, marginVertical: 10}}
        />
      )}
    />
  );

  return <View>{display}</View>;
}
export default HomeScreen;
