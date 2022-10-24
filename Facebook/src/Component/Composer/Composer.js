import React from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Composer = () => {
    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={styles.image}
                />
                <TextInput
                    placeholder='What’s on your mind?'
                />
            </View>
            <View style={styles.innerframecontainer}>
                <TouchableOpacity style={styles.frameimagecontainer}>
                    <Image
                        source={require('../../Assets/live.png')}
                        style={styles.frameimage}
                    />
                    <Text style={styles.frametext}>Live</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.frameimagecontainer}>
                    <Image
                        source={require('../../Assets/photo.png')}
                        style={styles.frameimage}
                    />
                    <Text style={styles.frametext}>Photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.frameimagecontainer}>
                    <Image
                        source={require('../../Assets/messenger.png')}
                        style={styles.frameimage}
                    />
                    <Text style={styles.frametext}>Discuss</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Composer;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    innercontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#E4E6EB',
        paddingVertical: 10,
        marginHorizontal: 12
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 20,
        resizeMode: 'contain',
        marginRight: 5
    },
    innerframecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    frameimagecontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#E4E6EB',
        paddingHorizontal:33,
        paddingVertical:10
    },
    frameimage: {
        width: 16,
        height: 16,
        resizeMode: 'contain',
        marginRight:5
    },
    frametext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16
    }
})