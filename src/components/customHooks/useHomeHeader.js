import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainTopHeader from '../header/MainTopHeader';

const useHomeHeader = () => {
  const navigation = useNavigation();

  const [isChichewa, setIsChiChewa] = useState(false);
  
  //fn() for bottomDialog
  const [isDialogVisible, setIsDialogVisisble] = useState(false);
  
  React.useLayoutEffect(() => {
    const showDialog = () => setIsDialogVisisble(!isDialogVisible);

    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => <MainTopHeader openDialog={showDialog} />,
    });
  }, [navigation]);

  return [isChichewa, isDialogVisible];
};

export default useHomeHeader;
