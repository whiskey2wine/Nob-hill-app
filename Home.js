/**
 * Created by jayakornkarikan on 10/12/2017 AD.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';


export default class Home extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('./Octocat.png')}
                        />
                </View>
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        placeholder={"Username"}
                        placeholderTextColor={'rgba(255, 255, 255,0.6)'}
                        returnKeyType={'next'}
                        onSubmitEditing={() => this.passwordInput.focus()}
                        enablesReturnKeyAutomatically={true}
                    />
                    <TextInput
                        style={styles.input}
                        autoCorrect={false}
                        autoCapitalize={'none'}
                        placeholder={"Password"}
                        placeholderTextColor={'rgba(255, 255, 255,0.6)'}
                        returnKeyType={'go'}
                        secureTextEntry={true}
                        ref={(input) => this.passwordInput = input}
                    />
                    <TouchableOpacity onPress={() => this.props.navigator.push({index: 3, title: 'Forget Password'})}>
                        <Text style={{fontSize: 12}}>Forget password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: '#D95E54'}]} onPress={() => this.props.navigator.push({index: 1, title: 'Profile'})}>
                        <Text style={styles.textBtn}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: '#3E5893'}]} onPress={() => this.props.navigator.push({index: 2, title: 'Register'})}>
                        <Text style={styles.textBtn}>Register</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(175, 214, 240,1.0)',
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        marginTop: 40
    },
    logo: {
        height: 100,
        width: 100
    },
    title: {
        color: '#FFF',
        width: 160,
        textAlign: 'center',
        opacity: 0.9,
        fontSize: 15
    },
    textBtn: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    button: {
        paddingVertical: 10,
        marginVertical: 5
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    formContainer: {
        padding: 20,
    }
});
