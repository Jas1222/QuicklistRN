import React, { useState } from 'react';
import { Colors } from '../../../Constants/Colors';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {addListing} from "../../../service/Service";

export const CreateReviewScreen = ({route}) => {
    const onButtonPress = () => {
        console.warn(route.params.submissionData)
        addListing(route.params.submissionData)
    }

    const renderHeader = () => {
        return (
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Step 3</Text>
            <Text style={styles.subtitle}>Review your listing:</Text>
          </View>
        )
      }

    const renderBookSection = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Book</Text>
                <Text style={styles.text}>Title: {route.params.submissionData.title}</Text>
                <Text style={styles.text}>Author: {route.params.submissionData.author}</Text>
                <Text style={styles.text}>Year: {route.params.submissionData.year}</Text>
                <Text style={styles.text}>Price: £{route.params.submissionData.price}</Text>
                <Text style={styles.text}>Description: {route.params.submissionData.description}</Text>
            </View>
        )
    }

    const renderReviewSection = () => {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.textHeader}>Degree</Text>
                <Text style={styles.text}>Type: {route.params.submissionData.type}</Text>
                <Text style={styles.text}>Year: {route.params.submissionData.year}</Text>
                <Text style={styles.text}>Course: {route.params.submissionData.course}</Text>
            </View>
        )
    }

    const renderButton = () => {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                <Text style={styles.buttonText}>Confirm and Submit</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{flex: 1}}>

        <ScrollView contentContainerStyle={styles.contentContainer}>
            <View>
                {renderHeader()}
                {renderBookSection()}
                {renderReviewSection()}
            </View>

            {renderButton()}
        </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      flexDirection: 'column',
     justifyContent: 'space-between'
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
      width: '90%',
      height: '7%',
      marginBottom: 20,
      paddingLeft: 30,
      paddingRight: 30,
      borderRadius: 50,
      backgroundColor: Colors.PRIMARY,
      justifyContent: 'center',
      alignSelf: 'center'
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 18,
      color: 'white',
      alignSelf: 'center'
    },
    textHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        marginBottom: 5
    },
    textContainer: {
        marginLeft: 20,
        marginBottom: 50
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14
    }
  });
  
  