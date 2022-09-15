import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Orientation from 'react-native-orientation-locker';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import youtubePlayer from './src/screens/youtubePlayer';
import Home from './src/screens/home';
import Demo from './src/screens/demo';

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Player"
          component={youtubePlayer}
        // options={{headerShown: false}}
        />
        <Stack.Screen
          name="Demo"
          component={Demo}
        // options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
