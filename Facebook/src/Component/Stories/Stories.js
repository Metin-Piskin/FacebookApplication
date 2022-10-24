import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Stories = () => {
    return (

        <LinearGradient
            style={styles.container}

            colors={[
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.0)',
                'rgba(0,0,0,0.6)'
            ]}
        >
            <TouchableOpacity style={styles.avatarcontainer}>
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={styles.avatar}
                />
            </TouchableOpacity>
            <View style={styles.namercontainer}>
                <Text style={styles.name}>Firstname</Text>
                <Text style={styles.name}>Lastname</Text>
            </View>
        </LinearGradient>

    )
}

export default Stories;

const styles = StyleSheet.create({
    container: {
        width: 99,
        height: 176,
        backgroundColor: '#88E7ED',
        marginVertical: 10,
        marginRight: 10,
        borderRadius: 12
    },
    avatarcontainer: {
        marginHorizontal: 8,
        marginVertical: 8,
        flex: 1
    },
    avatar: {
        width: 42,
        height: 42,
        resizeMode: 'contain',
        borderRadius: 21,
        borderWidth: 4,
        borderColor: '#fff',
    },
    namercontainer: {
        marginHorizontal: 5,
        marginVertical: 10
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 17,
    }
})