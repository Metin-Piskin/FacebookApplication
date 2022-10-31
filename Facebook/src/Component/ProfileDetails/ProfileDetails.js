import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { Home, Local, PostDots } from '../Svg';

const ProfileDetails = () => {
    return (
        <View style={styles.all}>
            <View style={styles.buttoncontainer}>
                <TouchableOpacity style={styles.postsbuttoncontainer}>
                    <Text style={styles.postsbuttontext}>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Reelsbuttoncontainer}>
                    <Text style={styles.Reelsbuttontext}>Reels</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.details}>
                <Text style={styles.detailstext}>Details</Text>
                <View style={styles.detailselementcontainer}>
                    <Home />
                    <Text style={styles.detailselementtext}>Lives in </Text>
                    <Text style={styles.elementtext}>Bursa</Text>
                </View>
                <View style={styles.detailselementcontainer}>
                    <Local />
                    <Text style={styles.detailselementtext}>From </Text>
                    <Text style={styles.elementtext}>Bursa</Text>
                </View>
                <View style={styles.detailselementcontainer}>
                    <PostDots />
                    <Text style={styles.detailselementtext}>See your About info</Text>
                </View>
                <TouchableOpacity style={styles.detailsbutton}>
                    <Text style={styles.detailsbuttontext}>Edit public details</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default ProfileDetails;

const styles = StyleSheet.create({
    all: {
        marginTop: 15,
        backgroundColor: '#fff'
    },
    buttoncontainer: {
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomWidth: 1,
        paddingHorizontal: 20,
        borderColor: 'gray'
    },
    postsbuttoncontainer: {
        marginRight: 20,
        backgroundColor: "#1877F2",
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    postsbuttontext: {
        color: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    Reelsbuttoncontainer: {
        borderRadius: 20
    },
    Reelsbuttontext: {
        padding: 10
    },
    details: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    detailstext: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 26
    },
    detailselementcontainer: {
        flexDirection: 'row',
        marginTop: 7
    },
    detailselementtext: {
        color: '#000',
        marginLeft: 10
    },
    elementtext: {
        color: '#000',
        fontWeight: 'bold'
    },
    detailsbutton: {
        backgroundColor: "#1877F2",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    detailsbuttontext: {
        color: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        fontWeight: 'bold'
    },
})