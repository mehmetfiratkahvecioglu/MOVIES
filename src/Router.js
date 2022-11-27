import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Constants from './Constants';
import Icon from 'react-native-vector-icons/Ionicons';
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'MOVIES',
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: Constants.baseColor},
            headerTitleStyle: {
              color: Constants.textColor,
            },
            headerLeft: () => (
              <Icon name="menu-sharp" size={30} color={Constants.textColor} />
            ),
            headerRight: () => (
              <Icon name="search-sharp" size={30} color={Constants.textColor} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
