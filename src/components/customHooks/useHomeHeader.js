import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainTopHeader from '../header/MainTopHeader';
import Chichewa from '../hymnsItem/Chichewa';
import English from '../hymnsItem/English';

const useHomeHeader = () => {
  const navigation = useNavigation();

  //imported and exported
  const [nyimbo, setNyimbo] = useState(Chichewa);
  const [song, setSong] = useState(English);

  // For search display
  const [nyimboQuery, setNyimboQuery] = useState(Chichewa);
  const [songQuery, setSongQuery] = useState(English);

  const [isChichewa, setIsChiChewa] = useState(false);

  //fn() for bottomDialog
  const [isDialogVisible, setIsDialogVisisble] = useState(true);
  const showDialog = () => {
    setIsDialogVisisble(isDialogVisible => !isDialogVisible);
    console.log(isDialogVisible);
  };

  // search fn()
  const searchItem = (queryItem) => {
    isChichewa
      ? setNyimboQuery(
          nyimbo.filter((nyimbo) => {
            return nyimbo.name.includes(queryItem);
          }),
        )
      : setSongQuery(
          song.filter((item) => {
            return item.name.includes(queryItem);
          }),
        );
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => (
        <MainTopHeader openDialog={showDialog} onSearch={searchItem} />
      ),
    });
  }, [navigation]);

  return [isChichewa, isDialogVisible, showDialog, nyimboQuery, songQuery];
};

export default useHomeHeader;
