/**
 * Created by jayakornkarikan on 10/12/2017 AD.
 */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import API from './api.js';


export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            ID: '',
            mobile: '',
            balance: ''
        };
        API().then((data) => {
            this.setState({name: data.fullname, email: data.email, ID: data.ID, mobile: data.mobile, balance: data.balance});
        })
            .catch((error)=>{});
    }

    static separator() {
        return (
            <View style={{height:1, backgroundColor: '#beebee'}}/>
        );
    }

    render() {
        return (

        <View style={styles.container}>
            <Image style={styles.image} source={require('./deafult+profile.jpg')}/>
            <View style={{borderRadius: 5, borderWidth: 2, borderColor: 'rgba(255, 255, 255,0)', backgroundColor: 'rgba(255, 255, 255,0.2)', width: 350}}>
                <View style={styles.group}>
                    <Text style={[styles.title,styles.textProf]}>Name</Text><Text style={styles.textProf}> {this.state.name}</Text>
                </View>
                {Home.separator()}
                <View style={styles.group}>
                    <Text style={[styles.title,styles.textProf]}>Email</Text><Text style={styles.textProf}> {this.state.email}</Text>
                </View>
                {Home.separator()}
                <View style={styles.group}>
                    <Text style={[styles.title,styles.textProf]}>ID</Text><Text style={styles.textProf}> {this.state.ID}</Text>
                </View>
                {Home.separator()}
                <View style={styles.group}>
                    <Text style={[styles.title,styles.textProf]}>Mobile</Text><Text style={styles.textProf}> {this.state.mobile}</Text>
                </View>
                {Home.separator()}
                <View style={styles.group}>
                    <Text style={[styles.title,styles.textProf]}>Balance</Text><Text style={styles.textProf}> {this.state.balance} Baht</Text>
                </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(175, 214, 240,1.0)',
        padding: 10,
        paddingTop: 75,
        alignItems: 'center',
    },
    textProf: {
        fontSize: 15,
        color: '#ffffff',
        padding: 5
    },
    title: {
        fontWeight: 'bold'
    },
    image: {
        height: 120,
        width: 120,
        marginBottom: 15,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: '#95bdd1'
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});
