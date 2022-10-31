import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { For, Live, Music, Follow } from '../Svg';

const ProfileScroll = () => {
    return (
        <ScrollView horizontal style={styles.all}>
            <TouchableOpacity style={styles.scrollbuttoncontainer}>
                <For />
                <Text style={styles.scrollbuttontex}>
                    For You
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollbuttoncontainer}>
                <Live />
                <Text style={styles.scrollbuttontex}>
                    Live
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollbuttoncontainer}>
                <Music />
                <Text style={styles.scrollbuttontex}>
                    Music
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scrollbuttoncontainer}>
                <Follow />
                <Text style={styles.scrollbuttontex}>
                    Follow
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default ProfileScroll;

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#fff',
    },
    scrollbuttoncontainer: {
        flexDirection: 'row',
        backgroundColor: '#E4E6EB',
        marginLeft: 10,
        paddingHorizontal: 18,
        paddingVertical: 3,
        borderRadius: 18,
        alignItems: 'center',
        marginVertical: 10
    },
    scrollbuttontex: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5
    },
})