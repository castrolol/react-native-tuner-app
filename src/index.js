import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <View style={styles.root}>
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
