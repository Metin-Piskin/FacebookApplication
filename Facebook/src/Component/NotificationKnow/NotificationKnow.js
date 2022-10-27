import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import { PostDots } from '../Svg';

const NotificationKnow = () => {
    return (
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.titletext}>
                    People You May Know
                </Text>
                <PostDots />
            </View>
            <View style={styles.innercontainer}>
                <Image
                    source={require('../../Assets/Avatar.png')}
                    style={styles.Avatar}
                />
                <View style={styles.btncontainer}>
                    <Text style={styles.nametext}>Name</Text>
                    <View style={styles.innerbtncontainer}>
                        <TouchableOpacity style={styles.Addbtncontainer}>
                            <Text style={styles.Addbtntext}>Add Friend</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Removebtncontainer}>
                            <Text style={styles.Removebtntext}>Remove</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.allbtncontainer}>
                <Text style={styles.allbtntext}>See all</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NotificationKnow;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 10
    },
    titlecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    titletext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 15
    },
    innercontainer: {
        flexDirection: 'row'
    },
    Avatar: {
        width: 75,
        height: 75,
        borderRadius: 40
    },
    btncontainer: {
        marginHorizontal: 15
    },
    nametext: {
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10
    },
    innerbtncontainer: {
        flexDirection: 'row',

    },
    Addbtncontainer: {
        backgroundColor: 'lightblue',
        paddingHorizontal: 28,
        paddingVertical: 3,
        borderRadius: 8,
        marginRight: 12
    },
    Removebtncontainer: {
        backgroundColor: '#E4E6EB',
        paddingHorizontal: 28,
        paddingVertical: 3,
        borderRadius: 8
    },
    Addbtntext: {
        fontSize: 17,
        fontWeight: '500',
        color: "#1877F2"
    },
    Removebtntext: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    },
    allbtncontainer: {
        backgroundColor: '#E4E6EB',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 5,
        marginVertical: 8
    },
    allbtntext: {
        color: '#000',
        fontWeight: 'bold'
    }
})