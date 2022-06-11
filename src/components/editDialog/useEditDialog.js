import { useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { DeleteTask } from "../../store/actions/DBActions"

export default function useEditDialog() {
    const uid = useSelector(state => state.AuthReducer.user.uid)
    const dispatch = useDispatch()
    
    const deleteHandler = (docID) => {
        dispatch(DeleteTask(uid, docID))
    }
    
    return [deleteHandler]
}
