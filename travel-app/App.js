import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen'
import StackNavigator from './Navigation/StackNavigator'

const App = () => {
  return (
    <View style={styles.container}>
      <StackNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;
