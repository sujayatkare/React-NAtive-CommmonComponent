import React from 'react';
import {View, Text} from 'react-native';

import FlatListScreen from '../common/flatList';
import FetchApi from '../common/useApi';

const EmployeeList = () => {
  return (
    <View>
      <FetchApi />
    </View>
  );
};

export default EmployeeList;
