import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { AntDesign, Entypo, SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '../../../Constants/Colors.js'

export const CreateForm = () => {
    const [title, setTitle] = useState(null);
    const [author, setAuthor] = useState(null);
    const [year, setYear] = useState(null);
    const [isbn, setIsbn] = useState(null);
    const [price, setPrice] = useState(null);
    const [description, setDescription] = useState(null);

    const renderTitle = () => {
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
                    onChangeText={text => setTitle(text)}
                    placeholder={"What is the book title?"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={300}
                />
            </View>
        )
    }

    return (
        <View style={styles.formContainer}>
            {renderTitle()}

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
                    onChangeText={text => setAuthor(text)}
                    placeholder={"What are the book authors?"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={300}
                />
            </View>

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
                    onChangeText={text => setYear(text)}
                    placeholder={"What year was the book published?"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={4}
                    keyboardType={'phone-pad'}
                />
            </View>

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
                    onChangeText={text => setIsbn(text)}
                    placeholder={"What is the book ISBN?"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={300}
                    keyboardType={'phone-pad'}
                />
            </View>

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
                    onChangeText={text => setDescription(text)}
                    placeholder={"Short description about the condition"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={3}
                />
            </View>

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
                    onChangeText={text => setPrice(text)}
                    placeholder={"Tap to enter desired price"}
                    underlineColorAndroid={Colors.PRIMARY}
                    maxLength={300}
                    keyboardType={'phone-pad'}
                />
            </View>


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