import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Register = () => {
  return (
    <View style={styles.container}>
      <Text> {"REGISTRATION SCREEN."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#E61E63'
  }
});