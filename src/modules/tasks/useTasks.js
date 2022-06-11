import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux'
import { GetData } from '../../store/actions/DBActions'


export default function useTasks() {
    const items = useSelector(state => state.DBReducer.newState)
    const uid = useSelector(state => state.AuthReducer.user.uid)
    const dispatch = useDispatch();
    const [getDataState, setGetDataState] = useState(false)

    useEffect(() => {
        dispatch(GetData(uid, setGetDataState))
    }, [])

    return [items, getDataState]
}