import React from 'react';
import {Appbar} from 'react-native-paper';
import {View} from 'react-native'

export default function MainTopHeader({openDialog}) {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  return (
    <View style={{flexDirection: 'row',}}>
      <Appbar.Action icon="magnify" onPress={() => {}} />
      <Appbar.Action icon={MORE_ICON} onPress={openDialog} />
    </View>
  );
}
