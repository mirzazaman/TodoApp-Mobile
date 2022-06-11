import React from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import Header from '../../components/header/Header'
import useTasks from './useTasks'
import EditDialog from '../../components/editDialog/EditDialog'


export default function Tasks({ navigation }) {
    const [items, getDataState] = useTasks();
    
    const ListItems = ({ item, index }) => {
        return (
            <View style={styles.listOpacity}>
                <View style={styles.listView}>
                    <Text style={styles.num}>{`${index + 1}. `}</Text>
                    <Text style={styles.text}>{`${item.task}`}</Text>
                </View>

                <EditDialog item={item} />

            </View>
        )
    }

    return (
        <ScrollView style={styles.mainTaskBack}>
            <Header navigation={navigation} />
            <Text style={styles.title}>Todo List</Text>

            {
                items ?. map((item, index) => {
                    return <ListItems key={index.toString()} item={item} index={index} />
                })
            }

            {getDataState ? <ActivityIndicator size={50} color="#FF5722" /> : null}


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    mainTaskBack: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    title: {
        color: "#FF5722",
        fontSize: 40,
        fontStyle: "italic",
        textAlign: "center",
        backgroundColor: "white",
        marginVertical: 10
    },
    listView: {
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white"
    },
    listOpacity: {
        display: "flex",
        flexDirection: "row",
        marginTop: 5,
        backgroundColor: "white",
        justifyContent: "space-between"
    },
    num: {
        margin: 10,
        fontSize: 20,
        color: "#FF5722"
    },
    text: {
        fontSize: 20,
        margin: 10,
    },
})