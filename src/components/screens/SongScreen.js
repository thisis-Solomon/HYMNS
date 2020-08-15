import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SongScreen = ({route}) => {
  const {songQuery} = route.params;
  return (
    <View>
      <Text>{songQuery}</Text>
    </View>
  );
};

export default SongScreen;

const styles = StyleSheet.create({});
