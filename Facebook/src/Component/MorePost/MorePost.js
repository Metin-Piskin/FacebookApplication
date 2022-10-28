import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MorePost = ({ title, icon }) => {
    return (
        <TouchableOpacity style={styles.container}>
            {icon}
            <Text style={styles.titletext}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MorePost;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        width: 170,
        paddingVertical: 18,
        borderRadius: 10,
        paddingLeft: 10
    },
    titletext: {
        color: '#000',
        fontWeight: '400',
        fontSize: 16
    }
})