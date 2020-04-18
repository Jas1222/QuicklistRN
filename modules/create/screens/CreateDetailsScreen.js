import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '../../../Constants/Colors';
import { CreateForm } from '../components/CreateForm';

export const CreateDetailsScreen = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate('CreateStep2')
  }

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Step 1</Text>
        <Text style={styles.subtitle}>Enter the book details:</Text>
      </View>
    )
  }

  const renderForm = () => {
   return <CreateForm/>
  }

  const renderButton = () => {
    return (
      <TouchableOpacity style={styles.buttonContainer} onPress={(onPress)}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderForm()}
      {renderButton()}
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 30
  },
  title: {
    color: Colors.PRIMARY_DARK,
    fontSize: 40
  },
  subtitle: {
    color: Colors.PRIMARY_DARK,
    fontSize: 19,
    marginTop: 10
  },

  buttonContainer: {
    width: '80%',
    height: '5%',
    borderRadius: 3,
    backgroundColor: Colors.PRIMARY,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  }
});

