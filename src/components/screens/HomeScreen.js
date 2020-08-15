import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useHomeHeader from '../customHooks/useHomeHeader';
import DialogSetting from '../header/DialogSetting';
import {Divider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

function HomeScreen() {
  // imported states and functions from customHooks
  const [
    isChichewa,
    isDialogVisible,
    showDialog,
    nyimboQuery,
    songQuery,
    switchVision,
    whichVision,
    handleSelectedItem,
  ] = useHomeHeader();

  // The vision to be displayed
  const display = isChichewa ? (
    <FlatList
      data={nyimboQuery}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleSelectedItem(item)}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        <Divider style={styles.ItemSeparatorHeight} />
      )}
    />
  ) : (
    <FlatList
      data={songQuery}
      keyExtractor={(item) => item.name}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleSelectedItem(item)}>
          <Text style={styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
      )}
      ItemSeparatorComponent={() => (
        <Divider style={styles.ItemSeparatorHeight} />
      )}
    />
  );

  return (
    <View style={styles.start}>
      <View>{display}</View>
      <DialogSetting
        visible={isDialogVisible}
        dismiss={showDialog}
        selectVision={switchVision}
        vision={whichVision}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  textStyle: {fontSize: 18, marginHorizontal: 15},
  ItemSeparatorHeight: {marginVertical: 10},
  start: {paddingVertical: 13},
});
