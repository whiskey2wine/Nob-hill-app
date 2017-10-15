/**
 * Created by jayakornkarikan on 10/13/2017 AD.
 */
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';


export default class Home extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                        <TextInput style={styles.input}
                                   placeholder={"Email"}
                                   placeholderTextColor={'rgba(255, 255, 255,0.6)'}
                                   autoFocus={true}
                                   autoCapitalize={'none'}
                                   autoCorrect={false}
                                   returnKeyType={'next'}/>
                    <TouchableOpacity style={[styles.button,{backgroundColor: '#3E5893'}]} onPress={() => this.props.navigator.pop()}>
                        <Text style={styles.textBtn}>Submit</Text>
                    </TouchableOpacity>
                    <KeyboardSpacer />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(175, 214, 240,1.0)',
        padding: 20,
        paddingTop: 75,
    },
    logo:{
        fontSize: 40,
        marginTop: 100,
        marginBottom: 40
    },
    textBtn: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    button: {
        padding: 10
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 280,
        paddingTop: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255,0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingHorizontal: 10
    }
});
