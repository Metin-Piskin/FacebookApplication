import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { PostDots, Like } from '../Svg';

const NotificationPost = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../Assets/Avatar.png')}
                style={styles.avatar}
            />
            <View style={styles.likecontainer}>
                <Like />
            </View>
            <View style={styles.innercontainer}>
                <Text style={styles.textname}>Name</Text>
                <Text style={styles.textlorem}>
                    Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                </Text>
            </View>
            <TouchableOpacity style={styles.dots}>
                <PostDots />
            </TouchableOpacity>
        </View>
    )
}

export default NotificationPost;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'lightblue',
        paddingHorizontal: 15,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 40
    },
    likecontainer: {
        position: 'absolute',
        backgroundColor: "#1877F2",
        padding: 5,
        borderRadius: 30,
        bottom: 10,
        left: 68
    },
    innercontainer: {
        marginLeft: 10
    },
    textname: {
        color: '#000',
        fontWeight: 'bold',
        marginRight: 5
    },
    textlorem: {
        color: '#000',
        textTransform: 'uppercase',
        textAlign: 'auto',
        marginRight: 45
    },
    dots: {
        justifyContent: 'center',
    }
})