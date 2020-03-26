import React, {useState, useEffect} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import useApi from './Api';
import FlatListApi from './FlatListApi';
import useLoading from './Loader';

const ApiFetch = () => {
  const [userData, errorMessage] = useApi();
  const [isLoading] = useLoading();

  console.log(userData);
  return isLoading ? (
    <View>
      <ActivityIndicator size="large" />
    </View>
  ) : errorMessage ? (
    <Text>{errorMessage}</Text>
  ) : (
    <View>
      <Text>we found {userData.length} results</Text>
      <FlatListApi title="name" result={userData} />
    </View>
  );
};
export default ApiFetch;
