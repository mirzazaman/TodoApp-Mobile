import React from "react";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { doSignup } from "../../store/actions/AuthAction";

export default function useSignup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const [signupState, setSignupState] = useState(false);

    const signupHandler = () => {
        if (username.length === 0) {
            return alert("Username cannot be empty")

        } else if (email.length === 0) {
            return alert("Email cannot be empty")

        } else if (password.length <= 7) {
            return alert("Password most have minimum 7 words")

        } else {
            let newUser = {
                Username: username,
                Email: email,
                Password: password
            }
            
            dispatch(doSignup(newUser, setSignupState))

            setUsername("");
            setEmail("");
            setPassword("");
        }

    }

    return [setUsername, setEmail, setPassword, username, email, password, signupHandler, signupState]
}