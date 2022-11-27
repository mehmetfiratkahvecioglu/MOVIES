import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {GET} from '../../services/API';

const DiscoverMovies = () => {
  useEffect(() => {
    const getMovies = async () => {
      let response = await GET('/discover/movie');
      console.log(response);
    };
    getMovies();
  }, []);

  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>DiscoverMovies</Text>
    </View>
  );
};

export default DiscoverMovies;

//useEFfect *
