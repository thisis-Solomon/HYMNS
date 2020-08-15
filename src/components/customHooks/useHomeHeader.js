import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainTopHeader from '../header/MainTopHeader';
import Chichewa from '../hymnsItem/Chichewa';
import English from '../hymnsItem/English';
import {Title} from 'react-native-paper';

const useHomeHeader = () => {
  const navigation = useNavigation();

  //imported and exported
  const [nyimbo] = useState(Chichewa);
  const [song] = useState(English);

  // For search display
  const [nyimboQuery, setNyimboQuery] = useState(Chichewa);
  const [songQuery, setSongQuery] = useState(English);

  // state of which vision and fn()
  const [isChichewa, setIsChiChewa] = useState(false);
  const switchVision = () => {
    setIsChiChewa(!isChichewa);
  };

  // card title and hearder title
  let hearderTitle;
  let whichVision;
  isChichewa
    ? ((whichVision = 'English'), (hearderTitle = 'NYIMBO ZA MULUNGU'))
    : ((whichVision = 'Chichewa'), (hearderTitle = 'SONGS OF GOD'));

  //fn() for bottomDialog
  const [isDialogVisible, setIsDialogVisisble] = useState(false);
  const showDialog = useCallback(() => {
    setIsDialogVisisble((isDialogVisible) => !isDialogVisible);
    console.log(isDialogVisible);
  }, [isDialogVisible]);

  // search fn()
  const searchItem = useCallback(
    (queryItem) => {
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
    },
    [isChichewa, nyimbo, song],
  );

  // Fn() for song or Nyimbo item
  const handleSelectedItem = (item) => {
    isChichewa
      ? navigation.navigate('Nyimbo', {
          nyimboQuery: item.item,
        })
      : navigation.navigate('Song', {
          songQuery: item.item,
        });
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Title>{hearderTitle}</Title>,
      headerRight: () => (
        <MainTopHeader openDialog={showDialog} onSearch={searchItem} />
      ),
    });
  }, [navigation, hearderTitle, showDialog, searchItem]);

  return [
    isChichewa,
    isDialogVisible,
    showDialog,
    nyimboQuery,
    songQuery,
    switchVision,
    whichVision,
    handleSelectedItem,
  ];
};

export default useHomeHeader;
