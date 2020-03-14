import React, { Component } from 'react';
import { Colors } from '../../Constants/Colors';
import { StyleSheet, Text, View } from 'react-native';

export const Browse = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {"Welcome."}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 120
  },
  title: {
    color: Colors.PRIMARY,
    fontSize: 40
  }
});