/**
 * Created by jayakornkarikan on 10/12/2017 AD.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Button } from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import DismissKeyboard from 'dismissKeyboard';


export default class Home extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    separator() {
        return (
            <View style={{height:1, backgroundColor: 'lightgray', margin: 5}}/>
        );
    }
    render() {
        return (
            <TouchableWithoutFeedback onPress={()=>{DismissKeyboard()}}>
                <View style={styles.container}>
                    <View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"Username"} autoCorrect={false} autoFocus={true} returnKeyType={'next'} autoCapitalize={'none'}/>
                        </View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"Password"} autoCorrect={false} returnKeyType={'next'} secureTextEntry={true}/>
                        </View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"Confirm Password"} autoCorrect={false} returnKeyType={'next'} secureTextEntry={true}/>
                        </View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"First Name"} autoCorrect={false} returnKeyType={'next'}/>
                        </View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"Last Name"} autoCorrect={false} returnKeyType={'next'}/>
                        </View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"Email"} autoCorrect={false} returnKeyType={'next'} keyboardType={'email-address'} autoCapitalize={'none'}/>
                        </View>
                        <View style={styles.group}>
                            <FloatLabelTextInput style={styles.inputBox} placeholder={"Contact Number"} autoCorrect={false} returnKeyType={'done'} keyboardType={'phone-pad'}/>
                        </View>
                    </View>
                    <KeyboardSpacer/>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        paddingTop: 75
    },
    logo:{
        fontSize: 25,
        marginBottom: 10
    },
    inputBox: {
        padding: 5,
        marginTop: 5,
        width: 220,
    },
    loginBtn: {
        fontSize: 15,
        borderWidth: 1,
        borderRadius: 5,
        padding: 5
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});