/**
 * Created by jayakornkarikan on 10/13/2017 AD.
 */
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
                    <View style={styles.group}>
                        <FloatLabelTextInput placeholder={"Email"} autoFocus={true} autoCapitalize={'none'} autoCorrect={false} returnKeyType={'next'}/>
                    </View>
                    <TouchableOpacity style={[styles.button,{backgroundColor: '#3E5893'}]} onPress={() => this.props.navigator.pop()}>
                        <Text style={styles.textBtn}>Submit</Text>
                    </TouchableOpacity>
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
        padding: 10,
        paddingTop: 75,
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
        borderRadius: 3,
        marginTop: 10
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 280,
        paddingTop: 20
    }
});
