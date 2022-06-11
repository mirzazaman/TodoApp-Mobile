import React from 'react'
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../components/header/Header';
import useAddTask from './useAddTask';

export default function AddTask({ navigation }) {

    const [setTask, task, wholeTask, addTaskState] = useAddTask();

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.mainBack}>
                <Text style={styles.title}>Add Todo</Text>
                {
                    addTaskState ? (<View style={styles.loader}><ActivityIndicator size={70} color="#FF5722" /></View>) : (
                        <>
                            <TextInput style={styles.input} placeholder="Task for today" placeholderTextColor="#FF5722" onChangeText={task => { setTask(task) }} defaultValue={task} />
                            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                                <TouchableOpacity onPress={wholeTask}>
                                    <Text style={styles.addBtn}>+ AddTask</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    )
                }

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    loader:{
        flex:1,
        justifyContent:"center"
    },
    mainBack: {
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    title: {
        color: "#FF5722",
        width: "100%",
        fontSize: 40,
        fontStyle: "italic",
        textAlign: "center",
        backgroundColor: "white",
        marginVertical: 10
    },
    input: {
        color: "#FF5722",
        borderWidth: 1,
        borderColor: "#FF5722",
        width: 250,
        marginTop: 50,
        borderRadius: 5
    },
    addBtn: {
        textAlign: "center",
        width: 250,
        paddingVertical: 10,
        color: "white",
        backgroundColor: "#FF5722",
        borderRadius: 30,
        marginBottom: 10
    },
})