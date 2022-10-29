import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { More, PersonEdit } from '../../Svg';

const ProfileHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Text style={styles.headername}>Metin Pişkin</Text>
                <TouchableOpacity style={styles.morecontainer}>
                    <More />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.PersonEditcontainer}>
                <PersonEdit />
            </TouchableOpacity>
        </View>
    )
}

export default ProfileHeader;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginTop: 23,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    headername: {
        fontWeight: 'bold',
        color: '#000',
        fontSize: 25
    },
    morecontainer: {
        alignSelf: 'center',
        marginLeft: 10
    },
    PersonEditcontainer: {
        alignSelf: 'center',
        backgroundColor: '#E4E6EB',
        padding: 10,
        borderRadius: 30
    }
})