import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar, LayoutAnimation} from 'react-native'
import firebaseConfig from '../fireconfig'
import * as firebase from "firebase"

export default class LoginScreen extends React.Component {

    static navigationOption = {
        header: null
    };

    state={
        email: "",
        password: "",
        errorMessage: null,
    }

    handleLogin = () => {
        const {email, password} = this.state
        // firebase.initializeApp(firebaseConfig)
        firebase.auth().signInWithEmailAndPassword(email, password).catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image style={styles.imageStyle} source={require("../assets/assetHeader.png")}></Image>
                <Image style={styles.imageStyle2} source={require("../assets/logo.png")}></Image>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({email})} value={this.state.email}></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={password => this.setState({password})} value={this.state.password}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}}
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    <Text style={{color: "#414959", fontSize: 13}}>
                        New to the Social App? <Text style={{fontWeight: "500", color: "#B5446B"}}>Sign Up</Text>
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        marginTop: 32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    errorMessage: {
        height: 15,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    form: {
        marginTop: 10,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#8A8F9B",
        fontSize: 10,
        textTransform: "uppercase",
    },
    input: {
        borderBottomColor: "#8A8F9B",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginTop: 40,
        marginHorizontal: 30,
        backgroundColor: "#11AACC",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle: {
        marginTop: 15,
        marginHorizontal: 70,
        borderRadius:20,
        height: 100,
        width: 220,
        alignItems: "center",
        justifyContent: "center"
    },
    imageStyle2: {
        marginHorizontal: 130,
        borderRadius: 50,
        height: 110,
        width: 110,
        alignItems: "center",
        justifyContent: "center"
    }
})