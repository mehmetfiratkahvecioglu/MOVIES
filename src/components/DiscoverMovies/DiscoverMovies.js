import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GET} from '../../services/API';
import {BASE_IMAGE_POSTER_URL} from '../../config';
import {SliderBox} from 'react-native-image-slider-box';
const DiscoverMovies = () => {
  const [movies, setMovies] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      let response = await GET('/discover/movie');
      setMovies(response.results);

      let apiImages = await response.results.map(
        data => `${BASE_IMAGE_POSTER_URL}${data.backdrop_path}`,
      );

      let PosterImagesForSlider = [];
      for (let i = 0; i < 10; i++) {
        PosterImagesForSlider = [...PosterImagesForSlider, apiImages[i]];
      }
      setImages(PosterImagesForSlider);
    };
    getMovies();
  }, []);

  return (
    <View style={{backgroundColor: 'red'}}>
      <Text>DiscoverMovies</Text>
      <SliderBox images={images} />
    </View>
  );
};

export default DiscoverMovies;

//useEFfect *
