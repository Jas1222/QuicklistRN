import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../../Constants/Colors.js'

export const CreateForm = ({ onTextEntered }) => {
    const renderTitleRow = () => {
        return (
            <View style={styles.row}>
                <View style={styles.iconContaniner}>
                    <AntDesign
                        name="book"
                        color={Colors.PRIMARY_DARK}
                        size={26}
                    />
                </View>

                <TextInput
                    style={styles.inputFields}
                    onChangeText={text => onTextEntered({ title: text })}
                    placeholder={"What is the book title?"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={300}
                />
            </View>
        )
    }

    const renderAuthorRow = () => {

    return (
        <View style={styles.row}>
            <View style={styles.iconContaniner}>
                <Entypo
                    name="feather"
                    color={Colors.PRIMARY_DARK}
                    size={26}
                />
            </View>

            <TextInput
                style={styles.inputFields}
                onChangeText={text => onTextEntered({ author: text })}
                placeholder={"What are the book authors?"}
                underlineColorAndroid={Colors.PRIMARY}
                maxLength={300}
            />
        </View>
    )
    }

    const renderYearRow = () => {
        return (
            <View style={styles.row}>
                <View style={styles.iconContaniner}>
                    <AntDesign
                        name="calendar"
                        color={Colors.PRIMARY_DARK}
                        size={26}
                    />
                </View>

                <TextInput
                    style={styles.inputFields}
                    onChangeText={text => onTextEntered({ year: text })}
                    placeholder={"What year was the book published?"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={4}
                    keyboardType={'phone-pad'}
                />
            </View>
        )
    }

    const renderBarcodeRow = () => {
    return (
        <View style={styles.row}>
            <View style={styles.iconContaniner}>
                <MaterialCommunityIcons
                    name="barcode"
                    color={Colors.PRIMARY_DARK}
                    size={26}
                />
            </View>

            <TextInput
                style={styles.inputFields}
                onChangeText={text => onTextEntered({ isbn: text })}
                placeholder={"What is the book ISBN?"}
                underlineColorAndroid={Colors.PRIMARY}
                maxLength={300}
                keyboardType={'phone-pad'}
            />
        </View>
    )
    }

    const renderDescriptionRow = () => {
        return (
            <View style={styles.row}>
                <View style={styles.iconContaniner}>
                    <SimpleLineIcons
                        name="pencil"
                        color={Colors.PRIMARY_DARK}
                        size={26}
                    />
                </View>

                <TextInput
                    style={styles.inputFields}
                    onChangeText={text => onTextEntered({ description: text })}
                    placeholder={"Short description about the condition"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={3}
                />
            </View>
        )
    }

    const renderPriceRow = () => {
        return (
            <View style={styles.row}>
                <View style={styles.iconContaniner}>
                    <Entypo
                        name="price-tag"
                        color={Colors.PRIMARY_DARK}
                        size={26}
                    />
                </View>

                <TextInput
                    style={styles.inputFields}
                    onChangeText={text => onTextEntered({ price: text })}
                    placeholder={"Tap to enter desired price"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={300}
                    keyboardType={'phone-pad'}
                />
            </View>
        )
    }

    return (
        <View style={styles.formContainer}>
            {renderTitleRow()}
            {renderAuthorRow()}
            {renderYearRow()}
            {renderBarcodeRow()}
            {renderDescriptionRow()}
            {renderPriceRow()}
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        marginTop: 40,
        margin: 50
    },
    iconContaniner: {
        marginTop: 15,
    },
    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputFields: {
        width: '100%',
        marginLeft: 15,
        height: 50
    },
});