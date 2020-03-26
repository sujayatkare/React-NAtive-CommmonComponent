import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import FlatList2 from './FlatList2';

const Loader = () => {
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setisLoading(false);
  }, []);
  
  return [isLoading];
};
export default Loader;
