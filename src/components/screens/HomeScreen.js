import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useHomeHeader from '../customHooks/useHomeHeader';
import DialogSetting from '../header/DialogSetting';
import {Divider} from 'react-native-paper';

function HomeScreen() {
  // imported states and functions from customHooks
  const [
    isChichewa,
    isDialogVisible,
    showDialog,
    nyimboQuery,
    songQuery,
  ] = useHomeHeader();

  // The vision to be displayed
  const display = isChichewa ? (
    <FlatList
      data={nyimboQuery}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <Text style={{fontSize: 18, marginHorizontal: 15}}>{item.name}</Text>
      )}
      ItemSeparatorComponent={() => <Divider style={{marginVertical: 10}} />}
    />
  ) : (
    <FlatList
      data={songQuery}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <Text style={{fontSize: 18, marginHorizontal: 15}}>{item.name}</Text>
      )}
      ItemSeparatorComponent={() => (
        <Divider style={{marginVertical: 10, backgroundColor: '#000'}} />
      )}
    />
  );

  return (
    <View style={{paddingVertical: 10}}>
      <View>{display}</View>
      <DialogSetting visible={isDialogVisible} dismiss={showDialog} />
    </View>
  );
}
export default HomeScreen;
