import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { doLogin } from "../../store/actions/AuthAction";


export default function useLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [loginState, setLoginState] = useState(false)

    const loginHandler = () => {

        if (email.length === 0 || password.length < 7) {

            return alert("Email or Password is incorrect")

        } else {

            dispatch(doLogin(email, password, setLoginState))

            setEmail("");
            setPassword("");
        }
    }

    useEffect(()=>{

    }, [])

    return [setEmail, setPassword, email, password, loginHandler, loginState]
}