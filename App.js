import React from 'react';
import { StatusBar, TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';
import DismissKeyboard from 'dismissKeyboard';
import Home from './Home.js';
import Profile from './Profile';
import Register from './register.js';
import Forget from './forget.js';

const routes = [{index: 0, title:'Nob Hill'},
    {index: 1, title: 'Profile'}, {index: 2, title: 'Register'}, {index: 3, title: 'Forget Password'}];

export default class App extends React.Component {
  render() {
    return (
        <TouchableWithoutFeedback onPress={DismissKeyboard}>
        <View style={styles.container}>
            <StatusBar barStyle={'light-content'}/>
          <Navigator
            initialRoute={routes[0]}
            initialRouteStack={routes}
            style={styles.container}
            renderScene={(route, navigator) => {
                switch (route.index) {
                    case 0:
                        console.log(navigator.getCurrentRoutes());
                        return (<Home navigator={navigator} route={routes[route.index]} {...route.passProps}/>);
                    case 1:
                        console.log(navigator.getCurrentRoutes());
                        return (<Profile navigator={navigator} route={routes[route.index]} {...route.passProps}/>);
                    case 2:
                        console.log(navigator.getCurrentRoutes());
                        return (<Register navigator={navigator} route={routes[route.index]} {...route.passProps}/>);
                    case 3:
                        console.log(navigator.getCurrentRoutes());
                        return (<Forget navigator={navigator} route={routes[route.index]} {...route.passProps}/>);
                }
            }
            }
            configureScene={
                (route, routeStack) =>
                    Navigator.SceneConfigs.FloatFromBottom
            }
            navigationBar={
                <Navigator.NavigationBar
                    routeMapper={{
                        LeftButton: (route, navigator, index, navState) => {
                            if (route.index === 0) {
                                return null;
                            }
                            return (
                                <TouchableOpacity onPress={() => {navigator.pop()}}>
                                    <Text style={styles.navigationBarText}>Back</Text>
                                </TouchableOpacity>
                            );
                        },
                        RightButton: (route, navigator, index, navState) => {
                            if (route.index === 2) {
                                return (
                                    <TouchableOpacity onPress={() => navigator.pop()}>
                                        <Text style={styles.navigationBarText}>Save</Text>
                                    </TouchableOpacity>
                                );
                            }
                            return null;
                        },
                        Title: (route, navigator, index, navState) => {
                            return (
                                <Text style={[styles.navigationBarText, styles.titleText]}>{route.title}</Text>
                            );
                        },
                    }}
                    style={styles.navigationBar}
                />
            }
            />
        </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationBar: {
        backgroundColor: 'rgba(175, 214, 240,0.0)',
    },
    navigationBarText: {
        color: 'rgba(255, 255, 255,0.8)',
        padding: 10,
        fontSize: 15
    },
    titleText: {
        fontSize: 20,
        paddingTop: 5
    }
});
