/**
 * Created by jayakornkarikan on 10/12/2017 AD.
 */
import React from 'react';
import { StyleSheet, TextInput, KeyboardAvoidingView, ScrollView } from 'react-native';


export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    render() {
        return (
            <KeyboardAvoidingView behavior={'padding'} style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} style={[styles.formContainer, {paddingVertical: 10}]}>
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => this.focusNextField('two')}
                        ref={ (input) => {
                            this.inputs['one'] = input;
                        }}
                        placeholder={"Username"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'}
                        autoCapitalize={'none'}/>
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => {
                            this.focusNextField('three');
                        }}
                        ref={ (input) => {
                            this.inputs['two'] = input;
                        }}
                        placeholder={"Password"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'}
                        secureTextEntry={true}/>
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => {
                            this.focusNextField('four');
                        }}
                        ref={ input => {
                            this.inputs['three'] = input;
                        }}
                        placeholder={"Confirm Password"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'}
                        secureTextEntry={true}/>
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => {
                            this.focusNextField('five');
                        }}
                        ref={ input => {
                            this.inputs['four'] = input;
                        }}
                        placeholder={"First Name"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'}/>
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => {
                            this.focusNextField('six');
                        }}
                        ref={ input => {
                            this.inputs['five'] = input;
                        }}
                        placeholder={"Nickname"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'} />
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => {
                            this.focusNextField('seven');
                        }}
                        ref={ input => {
                            this.inputs['six'] = input;
                        }}
                        placeholder={"Last Name"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'}/>
                    <TextInput
                        style={styles.inputBox}
                        onSubmitEditing={() => {
                            this.focusNextField('eight');
                        }}
                        ref={ input => {
                            this.inputs['seven'] = input;
                        }}
                        placeholder={"Email"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'next'}
                        keyboardType={'email-address'}
                        autoCapitalize={'none'}/>
                    <TextInput
                        style={styles.inputBox}
                        ref={ input => {
                            this.inputs['eight'] = input;
                        }}
                        placeholder={"Contact Number"}
                        placeholderTextColor={'rgba(255, 255, 255,0.8)'}
                        autoCorrect={false}
                        returnKeyType={'done'}
                        keyboardType={'phone-pad'}/>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(175, 214, 240,1.0)',
        padding: 10,
        paddingTop: 75
    },
    inputBox: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        marginBottom: 2,
        color: '#FFF',
        paddingHorizontal: 10
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255,0.4)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    formContainer: {
        padding: 15,
    }
});