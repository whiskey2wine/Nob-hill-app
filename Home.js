/**
 * Created by jayakornkarikan on 10/12/2017 AD.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, TouchableWithoutFeedback } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import DismissKeyboard from 'dismissKeyboard';
import KeyboardSpacer from 'react-native-keyboard-spacer';


export default class Home extends React.Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
            <View style={styles.container}>
                <Text style={styles.logo}>Nob Hill</Text>
                <View style={styles.group}>
                    <FloatLabelTextInput placeholder={"Username"} autoFocus={true} autoCapitalize={'none'} autoCorrect={false} returnKeyType={'next'}/>
                </View>
                <View style={styles.group}>
                    <FloatLabelTextInput placeholder={"Password"} autoCorrect={false} returnKeyType={'go'} secureTextEntry={true}/>
                </View>
                <View style={[styles.group,{marginTop: 10}]}>
                    <TouchableOpacity onPress={() => this.props.navigator.push({index: 3, title: 'Forget Password'})}>
                        <Text style={{fontSize: 12}}>Forget password</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', padding: 5, margin: 5, marginTop: 50}}>
                    <TouchableOpacity style={[styles.button,{backgroundColor: '#D95E54'}]} onPress={() => this.props.navigator.push({index: 1, title: 'Profile'})}>
                        <Text style={styles.textBtn}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor: '#3E5893'}]} onPress={() => this.props.navigator.push({index: 2, title: 'Register'})}>
                        <Text style={styles.textBtn}>Register</Text>
                    </TouchableOpacity>
                </View>
                <KeyboardSpacer />
            </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo:{
        fontSize: 40,
        marginTop: 100,
        marginBottom: 40
    },
    textBtn: {
        fontSize: 15,
        color: '#fff'
    },
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 3
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 280
    }
});
