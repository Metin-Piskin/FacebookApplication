import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import {
    HeaderLogo,

} from '../Svg';

const Header = () => {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.logocontainer}>
                <HeaderLogo />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconcontainer}>
                <Image
                    source={require('../../Assets/glass.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconcontainer}>
                <Image
                    source={require('../../Assets/messenger.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor:'#fff',
        paddingVertical:5
    },
    logocontainer: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 8
    },
    iconcontainer: {
        backgroundColor: '#E4E6EB',
        borderRadius: 36,
        marginRight: 8
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        margin: 16
    }
})