import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import useUpdateDialog from "./useUpdateDialog";

const UpdateDialog = ({ item }) => {
    const [
        updateHandler,
        modalVisible,
        setModalVisible,
        task,
        setTask,
    ] = useUpdateDialog()

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <TextInput autoFocus style={styles.modalText} defaultValue={task} onChangeText={task => setTask(task)} />

                            <View style={styles.actionBtns}>
                                <TouchableOpacity
                                    style={styles.Buttons}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.btnText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.Buttons}
                                    onPress={() => { setModalVisible(!modalVisible); updateHandler(item) }}
                                >
                                    <Text style={styles.btnText}>Update</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity
                style={styles.updateButton}
                onPress={() => { setModalVisible(true); setTask(item.task) }}
            >
                <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 5
    },
    updateButton: {
        paddingHorizontal: 20,
    },
    Buttons: {
        paddingHorizontal: 20,
    },
    btnText: {
        fontSize: 20,
        color: "#2091EB",
        fontWeight: "bold",
        textAlign: "center"
    },
    updateText: {
        fontSize: 20,
        color: "#2091EB",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 20,
        marginVertical: 50,
    },
    actionBtns: {
        display: 'flex',
        flexDirection: 'row',
    }
});

export default UpdateDialog;