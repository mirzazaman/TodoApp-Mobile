import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddData } from "../../store/actions/DBActions"


export default function useAddTask() {
    const uid = useSelector(state => state.AuthReducer.user.uid)
    const [task, setTask] = useState("")
    const dispatch = useDispatch();
    const [addTaskState, setAddTaskState] = useState(false)

    const wholeTask = () => {

        if (task.length === 0) {
            return

        } else{
            let data = {
                task,
            }

            dispatch(AddData(uid, data, setAddTaskState))
            setTask("")
        }


    }

    return [setTask, task, wholeTask, addTaskState]
}
