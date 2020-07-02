import React from 'react';
import {useNavigation} from '@react-navigation/native'

const useHomeHeader = () => {
    const navigation = useNavigation();

    React.useLayoutEffect(()=> {
        navigation.setOptions({
            headerTitle: 'Hello'
            // headerRight: 
        })
    },[navigation])
  return
};

export default useHomeHeader;
