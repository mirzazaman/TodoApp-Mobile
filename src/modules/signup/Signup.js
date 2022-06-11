import React from 'react'
import { View, Text, Image, StyleSheet, TextInput, ActivityIndicator, ScrollView } from 'react-native'
import MainIcon from "../../assets/MainIcon.png";
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import useSignup from './useSignup';

export default function Signup({ navigation }) {

    const [setUsername, setEmail, setPassword, username, email, password, signupHandler, signupState] = useSignup();

    return (
        <View style={styles.background}>

            <View style={styles.loginHeader}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Icon name="list" size={30} color="white" style={styles.drawerBtn} />
                </TouchableOpacity>
            </View>

            <Image style={styles.MainIcon} source={MainIcon} />

            {
                signupState ? (<View style={styles.loader}><ActivityIndicator size={70} color="#FF5722" /></View>) : (
                    <>
                        <ScrollView style={styles.inputView}>

                            <TextInput style={styles.input} autoFocus placeholder="Username" placeholderTextColor="#FF5722" onChangeText={username => { setUsername(username) }} defaultValue={username} />
                            <TextInput style={styles.input} keyboardType="email-address" placeholder="Email" placeholderTextColor="#FF5722" onChangeText={email => { setEmail(email) }} defaultValue={email} />
                            <TextInput style={styles.input} secureTextEntry={true} placeholder="Password" placeholderTextColor="#FF5722" onChangeText={password => { setPassword(password) }} defaultValue={password} />

                        </ScrollView>

                        <View style={styles.btnView}>
                            <TouchableOpacity onPress={signupHandler}>
                                <Text style={styles.loginBtn}>Sign up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                                <Text style={styles.loginBtn}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    MainIcon: {
        flex: 1,
        width: "70%",
        resizeMode: 'contain',
    },
    loginHeader: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FF5722",
    },
    drawerBtn: {
        margin: 10,
    },
    background: {
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "white"
    },
    inputView: {
        flex: 3,
    },
    input: {
        color: "#FF5722",
        borderWidth: 1,
        borderColor: "#FF5722",
        width: 250,
        margin: 10,
        borderRadius: 5
    },
    loginBtn: {
        textAlign: "center",
        width: 250,
        paddingVertical: 10,
        color: "white",
        backgroundColor: "#FF5722",
        marginBottom: 5,
        borderRadius: 30
    },
    btnView: {
        flex: 1,
        justifyContent: "flex-end"
    },
    loader:{
        flex:4,
        justifyContent:"center"
    }

})