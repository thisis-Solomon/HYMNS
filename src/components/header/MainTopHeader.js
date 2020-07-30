import React, {useState} from 'react';
import {Appbar, Searchbar} from 'react-native-paper';
import {View} from 'react-native';

export default function MainTopHeader({openDialog, onSearch}) {
  const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);

  const SearchBar = !isSearchBarVisible ? (
    <Appbar.Action
      icon="magnify"
      onPress={() => setIsSearchBarVisible(!isSearchBarVisible)}
    />
  ) : (
    <Searchbar
      style={{height: 38, alignSelf: 'center', borderRadius: 20}}
      placeholder="Eg. 384"
      maxLength = {3}
      keyboardType = 'number-pad'
      onChangeText={onSearch}
    />
  );

  return (
    <View style={{flexDirection: 'row'}}>
      {SearchBar}
      <Appbar.Action icon={MORE_ICON} onPress={openDialog} />
    </View>
  );
}
