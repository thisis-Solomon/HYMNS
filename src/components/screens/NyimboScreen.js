import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const NyimboScreen = ({route}) => {
  const {nyimboQuery} = route.params;
  return (
    <View>
      <Text>{nyimboQuery}</Text>
    </View>
  );
};

export default NyimboScreen;

const styles = StyleSheet.create({});
