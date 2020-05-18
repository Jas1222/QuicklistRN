import React, { useState, useEffect } from 'react';
import Modal from 'react-native-modal';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Colors } from '../../../Constants/Colors';
import { filterData } from '../../../service/FilterData';

export const CreateCourseFiltersScreen = ({ navigation, route }) => {
    const [isModalVisible, setVisible] = useState(false)
    const [listData, setListData] = useState(null)
    const [degreeFilters, setDegreeFilters] = useState(null)
    const [key, setKey] = useState('testKey')
    const [selectedData, setData] = useState({
        type: 'Select your degree type',
        course: 'Select your course',
        year: 'Select your year'
    })

    useEffect(() => {
        setDegreeFilters(filterData)
    }, [])

    const toggleModal = () => {
        setVisible(!isModalVisible);
    }

    const setInputData = (item) => {
        const data = {
            ...selectedData,
            [key]: item
        };
        setData(data)
        setKey(null)
        toggleModal()
    }

    const onButtonPress = () => {
        const updatedData = {
            ...route.params.submissionData,
            ...selectedData
        }
        navigation.navigate('CreateStep3', { submissionData: updatedData })
    }

    const onBackdropPress = () => {
        setListData(null)
        toggleModal()
    }

    const onDegreeFilterPressed = (data, key) => {
        setKey(key)
        setListData(data)
        setVisible(true)
    }

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                style={styles.selectionRowContainer}
                onPress={() => setInputData(item)}>
                <Text style={styles.selectionRowText}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const renderHeader = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.title}>Step 2</Text>
                <Text style={styles.subtitle}>Enter your course details:</Text>
            </View>
        )
    }

    const renderModal = () => {
        return (
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={onBackdropPress}
            >
                <View style={styles.modalContainer}>
                    <FlatList
                        data={listData}
                        renderItem={(item) => renderItem(item)}
                        keyExtractor={item => item}
                    />
                </View>
            </Modal>
        )
    }

    const renderDegreeType = () => {
        return (

            <TouchableOpacity style={styles.filterRowContainer} onPress={() => onDegreeFilterPressed(degreeFilters.type, 'type')}>
                <Text style={styles.filterRowText}>{selectedData.type}</Text>
            </TouchableOpacity>
        )
    }

    const renderYear = () => {
        return (
            <TouchableOpacity style={styles.filterRowContainer} onPress={() => onDegreeFilterPressed(degreeFilters.year, 'year')}>
                <Text style={styles.filterRowText}>{selectedData.year}</Text>
            </TouchableOpacity>
        )
    }

    const renderDegree = () => {
        return (
            <TouchableOpacity style={styles.filterRowContainer} onPress={() => onDegreeFilterPressed(degreeFilters.course, 'course')}>
                <Text style={styles.filterRowText}>{selectedData.course}</Text>
            </TouchableOpacity>
        )
    }

    const renderFilters = () => {
        return <View style={{ flexDirection: 'column', width: '100%' }}>
            {renderDegreeType()}
            {renderYear()}
            {renderDegree()}
        </View>
    }

    const renderButton = () => {
        // TODO: VALIDATION
        return (
            <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                <Text style={styles.buttonText}>Review and Confirm</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{width: 400}}>
                {renderHeader()}
                {renderFilters()}
                {renderModal()}
            </View>
            {renderButton()}
        </View>)
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
        marginTop: 30,
        marginBottom: 50
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
    },
    filtersContainer: {
        width: '100%'
    },
    filterRowContainer: {
        width: '80%',
        height: 70,
        backgroundColor: Colors.PRIMARY_DARK,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 17

    },
    filterRowText: {
        color: 'white',
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    selectionRowContainer: {
        padding: 10,
        marginBottom: 5
    },
    selectionRowText: {
        color: 'black',
        fontSize: 15
    },
    modalContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: '50%',
        width: '80%',
        backgroundColor: Colors.WHITE
    }
});