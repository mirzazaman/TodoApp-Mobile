import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../store/actions/AuthAction'

export default function useLogout() {
    const dispatch = useDispatch()
    const [logoutState, setLogoutState] = useState(false)

    const logoutHandler = () => {
        dispatch(doLogout(setLogoutState))
    }

    return [logoutHandler, logoutState]
}