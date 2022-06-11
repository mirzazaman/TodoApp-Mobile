import { ADD_TASK, DELETE_TASK, GET_TASK, UPDATE_TASK } from "../../constants/Types"
import { db } from '../../config/Firebase'

export const AddData = (uid, data, setAddTaskState) => async (dispatch) => {

    try {
        setAddTaskState(true);
        await db.collection("Tasks").doc(uid).collection('tasks').add(data)

        dispatch({
            type: ADD_TASK,
            payload: data
        })

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            alert("Network Error");
            return;

        } else {
            alert("Something went wrong")
            console.log("Error from AddData action", error.message);
        }

    } finally {
        setAddTaskState(false);
    }

}

export const GetData = (uid, setGetDataState) => async (dispatch) => {
    try {
        setGetDataState(true)
        let res = await db.collection("Tasks").doc(uid).collection('tasks').get();

        let data = []

        res.forEach((doc) => {

            data.push({
                docID: doc.id,
                ...doc.data()
            })
        })

        dispatch({
            type: GET_TASK,
            payload: data
        })

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            alert("Network Error");
            return;

        } else {
            alert("Something went wrong")
            console.log("Error from GetData action", error.message);
        }

    } finally {
        setGetDataState(false)
    }
}

export const UpdateTask = (uid, task, docID) => async (dispatch) => {
    try {
        await db.collection("Tasks").doc(uid).collection('tasks').doc(docID).update(task)

        dispatch({
            type: UPDATE_TASK,
            payload: { docID, task }
        })

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            alert("Network Error");
            return;

        } else {
            alert("Something went wrong")
            console.log("Error from Update action", error.message);
        }
    }
}

export const DeleteTask = (uid, docID) => async (dispatch) => {
    try {
        await db.collection("Tasks").doc(uid).collection('tasks').doc(docID).delete();

        dispatch({
            type: DELETE_TASK,
            payload: docID
        })

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            return alert("Network Error");

        } else {
            alert("Something went wrong")
            console.log("Error from DeleteTask action", error.message);
        }

    }
}