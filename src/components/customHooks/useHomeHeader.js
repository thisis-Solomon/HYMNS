import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainTopHeader from '../header/MainTopHeader';
import Chichewa from '../hymnsItem/Chichewa';
import English from '../hymnsItem/English';
import {Title} from 'react-native-paper';

const useHomeHeader = () => {
  const navigation = useNavigation();

  //imported and exported
  const [nyimbo, setNyimbo] = useState(Chichewa);
  const [song, setSong] = useState(English);

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
  const [isDialogVisible, setIsDialogVisisble] = useState(true);
  const showDialog = () => {
    setIsDialogVisisble((isDialogVisible) => !isDialogVisible);
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
      headerTitle: () => <Title>{hearderTitle}</Title>,
      headerRight: () => (
        <MainTopHeader openDialog={showDialog} onSearch={searchItem} />
      ),
    });
  }, [navigation, hearderTitle]);

  return [
    isChichewa,
    isDialogVisible,
    showDialog,
    nyimboQuery,
    songQuery,
    switchVision,
    whichVision,
  ];
};

export default useHomeHeader;
