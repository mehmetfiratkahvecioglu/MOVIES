import {StyleSheet} from 'react-native';
import Constants from '../../Constants';
const styles = StyleSheet.create({
  container: {alignItems: 'center', margin: 5},
  image: {height: 60, width: 60, borderRadius: 30, marginBottom: 3},
  text: {
    width: 60,
    fontSize: 12,
    textAlign: 'center',
    color: Constants.textColor,
  },
});

export default styles;
