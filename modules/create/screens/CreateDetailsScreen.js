import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import {Colors} from '../../../Constants/Colors';
import {CreateForm} from '../components/CreateForm';

export const CreateDetailsScreen = ({navigation}) => {
    const [submissionData, setSubmissionData] = useState(null);

    const onPress = () => {
        navigation.navigate('CreateStep2', {
            submissionData: submissionData
        })
    }

    const onTextEntered = (data) => {
        const updatedData = {
            ...submissionData,
            ...data
        }

        setSubmissionData(updatedData)
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style=
                          {styles.title}>Step 1</Text>
                <Text style={styles.subtitle}>Enter the book details:</Text>
            </View>
        )
    }

    const renderForm = () => {
        return <CreateForm onTextEntered={onTextEntered}/>
    }

    const renderButton = () => {
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <View>
                {renderHeader()}
                {renderForm()}
            </View>
            {renderButton()}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        width: '90%',
        height: '7%',
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 50,
        backgroundColor: Colors.PRIMARY,
        justifyContent: 'center',
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    }
});

