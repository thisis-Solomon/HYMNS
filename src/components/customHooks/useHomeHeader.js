import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MainTopHeader from '../header/MainTopHeader';

const useHomeHeader = () => {
  const navigation = useNavigation();

  const [isChichewa, setIsChiChewa] = useState(false);
  
  //fn() for bottomDialog
  const [isDialogVisible, setIsDialogVisisble] = useState(false);
  const showDialog = () => setIsDialogVisisble(!isDialogVisible);
  
  React.useLayoutEffect(() => {

    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => <MainTopHeader openDialog={showDialog} />,
    });
  }, [navigation]);

  return [isChichewa, isDialogVisible, showDialog];
};

export default useHomeHeader;
