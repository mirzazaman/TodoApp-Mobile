import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import MainIcon from '../../assets/MainIcon.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Header({ navigation }) {
    return (
        <View style={styles.mainheader}>
            <Image source={MainIcon} style={styles.mainIcon} />
            <TouchableOpacity style={styles.drawerBtn} onPress={() => { navigation.openDrawer() }}>
                <Icon name="list" size={30} color="#FF5722" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainheader: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    mainIcon: {
        width: 150,
        height: 60,
        marginLeft:15,
        marginTop:5,
        resizeMode: 'contain',
    },
    drawerBtn: {
        margin: 20
    }
})