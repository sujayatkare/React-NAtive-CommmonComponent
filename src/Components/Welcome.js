import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import data from '../mockdata/data';
import ButtonNavigation from '../common/Button';
import EmployeeList from './EmployeeList';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ButtonNavigation screenName="Login" navigation={navigation} />
      <ButtonNavigation screenName="SignUp" navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Welcome;
