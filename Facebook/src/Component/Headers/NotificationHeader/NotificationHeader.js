import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Glass } from '../../Svg';

const NotificationHeader = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Notifications</Text>
            <TouchableOpacity style={styles.glasscontainer}>
                <Glass />
            </TouchableOpacity>
        </View>
    )
}

export default NotificationHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        backgroundColor: '#fff',
        paddingVertical: 10,
        marginTop:20
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 28
    },
    glasscontainer: {
        justifyContent: 'center',
        backgroundColor: '#E4E6EB',
        padding: 10,
        borderRadius: 20
    }
})