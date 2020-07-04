import React from 'react';
import {useNavigation} from '@react-navigation/native';
import MainTopHeader from '../header/MainTopHeader';

const useHomeHeader = () => {
  const navigation = useNavigation();
  const [isChichewa, setIsChiChewa] = React.useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Home',
      headerRight: () => <MainTopHeader/>
    });
  }, [navigation]);
  return isChichewa;
};

export default useHomeHeader;
