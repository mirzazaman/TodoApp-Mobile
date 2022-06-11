import { authentication, db } from "../../config/Firebase";
import { LOGIN, LOGOUT } from "../../constants/Types";

export const doLogin = (email, password, setLoginState) => async (dispatch) => {

    try {
        setLoginState(true);
        let userCredential = await authentication.signInWithEmailAndPassword(email, password);

        let user = userCredential.user;

        dispatch({
            type: LOGIN,
            payload: user
        })

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            alert("Network Error");
            return;

        } else {
            alert("Email or Password is incorrect")
            console.log("Error from doLogin action",error.message);
        }

    } finally {
        setLoginState(false)
    }
}

export const doSignup = (newUser, setSignupState) => async (dispatch) => {

    try {
        setSignupState(true)
        let userCredential = await authentication.createUserWithEmailAndPassword(newUser.Email, newUser.Password);
        var user = userCredential.user;

        await db.collection("Users").add(newUser)

        dispatch({
            type: LOGIN,
            payload: user
        })

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            alert("Network Error");
            return;

        } else if (error.message.toString() === "[auth/email-already-in-use] The email address is already in use by another account.") {
            alert("This user already existed!")
            console.log("Error from doSignup action",error.message);
        
        } else {
            alert("Something went wrong")
            console.log("Error from doSignup action",error.message);
        }

    } finally {
        setSignupState(false)
    }
}

export const reLogin = () => async (dispatch) => {
    try {
        await authentication.onAuthStateChanged((user)=>{
            if (user) {
                dispatch({
                    type: LOGIN,
                    payload: user
                })
            }
        })

    } catch (error) {
        console.log("Error in reLogin Action", error.code);
        alert('Somthing went wrong')
    }
}

export const doLogout = (setLogoutState) => async (dispatch) => {

    try {
        setLogoutState(true)
        await authentication.signOut();

        dispatch({
            type: LOGOUT,
        });

    } catch (error) {

        if (error.message.toString() === "[auth/network-request-failed] A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
            alert("Network Error");
            return;

        } else {
            alert("Something went wrong")
            console.log("Error from doLogout action",error.message);
        }
    } finally {
        setLogoutState(false)
    }
};