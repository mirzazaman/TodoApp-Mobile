import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useEditDialog from "./useEditDialog";
import UpdateDialog from "../updateDialog/UpdateDialog";

const EditDialog = ({ item }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [deleteHandler] = useEditDialog()

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

                            <Text style={styles.modalText}>{item.task}</Text>

                            <View style={styles.actionBtns}>
                                <TouchableOpacity
                                    style={styles.delButton}
                                    onPress={() => { setModalVisible(!modalVisible); deleteHandler(item.docID) }}
                                >
                                    <Text style={styles.deltext}>Delete</Text>
                                </TouchableOpacity>

                                    <UpdateDialog item={item} />

                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
            <TouchableOpacity
                style={styles.editButton}
                onPress={() => setModalVisible(true)}
            >
                <Text style={styles.editText}>Edit</Text>
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
    editButton: {
        padding: 15,
        backgroundColor: "#2091EB",
    },
    delButton: {
        paddingHorizontal: 20,
    },
    deltext: {
        fontSize: 20,
        color: "#ed2323",
        fontWeight: "bold",
        textAlign: "center"
    },
    editText: {
        fontSize: 15,
        color: "white",
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

export default EditDialog;