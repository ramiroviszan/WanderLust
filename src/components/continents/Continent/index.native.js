import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Regions from '../../regions/Regions';

const Continent = ({name, regions, navigation}) => (
  <View>
    <Text>
      { name }
    </Text>
    <Regions regions={ regions } navigation={navigation}/>
  </View>
);

export default Continent;
