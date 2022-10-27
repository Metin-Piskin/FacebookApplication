import React from 'react';
import { View, Text, Image, StatusBar, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View>
            <StatusBar
                barStyle={'light-content'}
                translucent={true}
                backgroundColor={'rgba(0,0,0,0)'}
            />
            <Image
                source={require('../../../Assets/loginbanner.png')}
                style={styles.banner}
            />
            <View style={styles.dilcontainer}>
                <Text>Espanol </Text>
                <Text>•</Text>
                <Text> Français </Text>
                <Text>•</Text>
                <TouchableOpacity>
                    <Text style={styles.moretext}> More...</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.inputcontainer}>
                <TextInput
                    placeholder='Phone or email'
                    style={styles.input}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                />
            </View>
            <TouchableOpacity style={styles.Logincontainer} onPress={() => navigation.navigate('BottomTab')}>
                <Text style={styles.Logintext}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Passwordcontainer}>
                <Text style={styles.Passwordtext}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.Orcontainer}>
                <View style={styles.çizgi}></View>
                <Text>OR</Text>
                <View style={styles.çizgi}></View>
            </View>

            <TouchableOpacity style={styles.Sigincontainer}>
                <Text style={styles.Sigintext}>Create new Facebook account</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    banner: {
        width: Dimensions.get('window').width,
    },
    dilcontainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    moretext: {
        color: '#1877F2'
    },
    inputcontainer: {
        marginTop: 50
    },
    input: {
        borderBottomWidth: 2,
        borderColor: '#E4E6EB',
        marginHorizontal: 35,
        fontSize: 17,
        marginTop: 10
    },
    Logincontainer: {
        backgroundColor: '#1877F2',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 35,
        borderRadius: 8,
        marginVertical: 20
    },
    Logintext: {
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10,
        fontSize: 18
    },
    Passwordcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Passwordtext: {
        fontWeight: 'bold',
        color: '#1877F2',
        fontSize: 18
    },
    Orcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 45
    },
    çizgi: {
        borderColor: '#E4E6EB',
        borderTopWidth: 3,
        width: 150,
        alignSelf: 'center',
        marginHorizontal: 5
    },
    Sigincontainer: {
        backgroundColor: '#2FA24B',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 60,
        borderRadius: 8,
    },
    Sigintext: {
        fontWeight: 'bold',
        color: '#fff',
        paddingVertical: 10,
        fontSize: 18
    }
})