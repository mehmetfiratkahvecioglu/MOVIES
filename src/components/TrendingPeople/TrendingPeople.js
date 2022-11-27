import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GET} from '../../services/API';
import DisplayPeople from '../DisplayPeople';
import styles from './TrendingPeople.style';
const TrendingPeople = () => {
  const [people, SetPeople] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const url = '/trending/person/week';

  useEffect(() => {
    const getPeople = async () => {
      const data = await GET(url);
      console.log(data);
      SetPeople(data.results);
    };
    getPeople();
  }, []);

  return (
    <View>
      <Text style={styles.title}>Trending People</Text>
      <FlatList
        data={people}
        renderItem={({item}) => <DisplayPeople item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default TrendingPeople;
