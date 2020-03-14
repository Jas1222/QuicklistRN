import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Browse = () => {
  return (
    <View style={styles.container}>
      <Text> {"Welcome."}</Text>
      <Text> {"Select your filters from the options below:"}</Text>
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