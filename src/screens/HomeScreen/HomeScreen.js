import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import DiscoverMovies from '../../components/DiscoverMovies';
import TrendingPeople from '../../components/TrendingPeople';
import Constant from '../../Constants';
const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: Constant.baseColor}}>
      <DiscoverMovies />
      <TrendingPeople />
    </View>
  );
};

export default HomeScreen;
