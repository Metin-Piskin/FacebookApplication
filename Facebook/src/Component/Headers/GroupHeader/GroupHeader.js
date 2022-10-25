import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Settings, Group, Explore } from '../../Svg';

const Box = () => {
    return (
        <LinearGradient
            style={styles.cont}
            colors={[
                'rgba(0,0,0,0.3)',
                'rgba(0,0,0,0.3)',
                'rgba(0,0,0,0.3)',
                'rgba(0,0,0,0.3)'
            ]}
        >
            <Image
                source={require('../../../Assets/Avatar.png')}
                style={styles.Avatar}
            />
            <Text style={styles.AvatarTitle}>Title</Text>
        </LinearGradient>
    )
}

const GroupHeader = () => {
    return (
        <View>
            <View style={styles.all}>
                <Text style={styles.title} >Groups</Text>
                <TouchableOpacity style={styles.plus}>
                    <Image
                        source={require('../../../Assets/plus.png')}
                        style={styles.plusicon}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Settings}>
                    <Settings />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Settings}>
                    <Image
                        source={require('../../../Assets/glass.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView horizontal style={styles.scroll}>
                <TouchableOpacity style={styles.blog}>
                    <Group />
                    <Text style={styles.blogtext}>Your Groups</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.blog}>
                    <Image
                        source={require('../../../Assets/live.png')}
                    />
                    <Text style={styles.blogtext}>Rooms & Chats</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.blog}>
                    <Explore />
                    <Text style={styles.blogtext}>Rooms & Chats</Text>
                </TouchableOpacity>
            </ScrollView>
            <ScrollView horizontal style={styles.scroll}>
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </ScrollView>
        </View>
    )
}

export default GroupHeader;

const styles = StyleSheet.create({
    all: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        paddingVertical: 5,
    },
    title: {
        flex: 1,
        fontWeight: 'bold',
        color: '#000',
        fontSize: 26,
        marginLeft: 15,
    },
    plus: {
        backgroundColor: '#E4E6EB',
        padding: 5,
        borderRadius: 30,
        marginRight: 10
    },
    plusicon: {
        backgroundColor: '#000',
        height: 24,
        width: 24,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Settings: {
        backgroundColor: '#E4E6EB',
        padding: 6,
        borderRadius: 30,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scroll: {
        backgroundColor: '#fff',
        paddingVertical: 5
    },
    blog: {
        flexDirection: 'row',
        marginHorizontal: 8,
        backgroundColor: '#E4E6EB',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 15,
        alignItems: 'center'
    },
    blogtext: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#000'
    },
    cont: {
        width: 80,
        height: 80,
        marginLeft: 8,
        borderRadius: 10,
        marginVertical: 5
    },
    Avatar: {
        width: 80,
        height: 80,
        borderRadius: 10,
        zIndex: -1
    },
    AvatarTitle: {
        color: '#fff',
        position: 'absolute',
        bottom: 5,
        left: 15,
        fontWeight: '600'
    }
})