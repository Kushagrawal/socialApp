import React from 'react'
import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity, StatusBar} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import firebaseConfig from '../fireconfig'
import * as firebase from "firebase"

export default class RegisterScreen extends React.Component {

    static navigationOptions = {
        header: "Registration"
    }

    state={
        name: "",
        email: "",
        password: "",
        errorMessage: null,
    }

    handleSignUp = () => {
        firebase.initializeApp(firebaseConfig)
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            })
            .catch(error => this.setState({errorMessage: error.message}))
    }

    render(){
        return (
            <View style={styles.container}>
                <Image style={styles.imageStyle} source={require("../assets/assetHeader.png")}></Image>
                {/* <Image style={styles.imageStyle2} source={require("../assets/logo.png")}></Image> */}

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>
                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <Text style={styles.inputTitle}>Name</Text>
                    <TextInput style={styles.input} autoCapitalize="none" onChangeText={name => this.setState({name})} value={this.state.name}></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={styles.inputTitle}>Email Address</Text>
                    <TextInput style={styles.input} autoCapitalize="none" onChangeText={email => this.setState({email})} value={this.state.email}></TextInput>
                </View>
                <View style={styles.form}>
                    <Text style={styles.inputTitle}>Password</Text>
                    <TextInput style={styles.input} autoCapitalize="none" secureTextEntry onChangeText={password => this.setState({password})} value={this.state.password}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 22}}
                    onPress={() => this.props.navigation.navigate("Login")}
                >
                    <Text style={{color: "#414959", fontSize: 13}}>
                        Already have account? <Text style={{fontWeight: "500", color: "#B5446B"}}>Sign In</Text>
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
        marginTop: 12,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    error: {
        color: "#E9446A",
        fontSize: 11,
        fontWeight: "600",
        textAlign: "center"
    },
    errorMessage: {
        height: 50,
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
        marginTop: 95,
        marginHorizontal: 70,
        borderRadius:20,
        height: 100,
        width: 220,
        alignItems: "center",
        justifyContent: "center"
    },
    back: {
        position: 'absolute',
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    }
    
})