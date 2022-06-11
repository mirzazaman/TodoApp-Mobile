import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { reLogin } from '../../store/actions/AuthAction'

export default function useDrawerNavigation() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reLogin())
    }, [])
    
    return []
}
