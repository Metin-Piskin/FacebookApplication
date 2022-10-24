import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const AddStorie = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <TouchableOpacity style={styles.plusiconcontainer}>
                    <Image
                        source={require('../../Assets/plus.png')}
                        style={styles.plusicon}
                    />
                </TouchableOpacity>
                <Text style={styles.text}>Create a Story</Text>
            </View>
        </View>
    )
}

export default AddStorie;

const styles = StyleSheet.create({
    container: {
        width: 99,
        height: 176,
        backgroundColor: '#88E7ED',
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        justifyContent: 'flex-end',
        margin: 10
    },
    innercontainer: {
        height: 60,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        fontWeight: '500',
        fontSize: 16,
    },
    plusiconcontainer: {
        backgroundColor: '#1877F2',
        padding: 6,
        borderRadius: 20,
        marginTop: -17,
        borderWidth: 3,
        borderColor: '#fff'
    },
    plusicon: {
        width: 24,
        height: 24
    }
})