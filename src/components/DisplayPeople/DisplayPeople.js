import {View, Text, Image} from 'react-native';
import React from 'react';
import {BASE_IMAGE_POSTER_URL} from '../../config';
import styles from './DisplayPeople.style';

const DisplayPeople = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: `${BASE_IMAGE_POSTER_URL}${item.profile_path}`}}
        style={styles.image}
      />
      <Text numberOfLines={2} style={styles.text}>
        {item.name}
      </Text>
    </View>
  );
};

export default DisplayPeople;
