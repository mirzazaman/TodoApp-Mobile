import React from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import Header from '../../components/header/Header'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import useLogout from './useLogout'

export default function Logout({ navigation }) {

    const [logoutHandler, logoutState] = useLogout();

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.mainback}>
                {
                    logoutState ? (<View><ActivityIndicator size={80} color="#FF5722" /></View>) : (
                        <TouchableOpacity style={styles.btnOpacity} onPress={logoutHandler}>
                            <Icon style={styles.btnIcon} name="upcircle" size={27} color="white" />
                            <Text style={styles.btnText}>Logout</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    mainback: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    btnOpacity: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FF5722",
        padding: 20,
        borderRadius: 10
    },
    btnText: {
        color: "white",
        fontSize: 20,
    }
})