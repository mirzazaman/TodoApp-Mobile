import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { UpdateTask } from "../../store/actions/DBActions";

export default function useUpdateDialog() {
    const [task, setTask] = useState('')
    const [modalVisible, setModalVisible] = useState(false);
    const uid = useSelector(state => state.AuthReducer.user.uid)
    const dispatch = useDispatch()

    const updateHandler = (item) => {
        if (task.length === 0) {
            return

        } else {
            let docID = item.docID
            dispatch(UpdateTask(uid, { task }, docID))
        }
    }

    return [
        updateHandler,
        modalVisible,
        setModalVisible,
        task,
        setTask,
    ]
}