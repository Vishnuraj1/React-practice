import React from 'react'
import firebase from '../Firebase/Config';

const SignUp = () => {

    var signUpHandler = () => {
        var email = "someone@example.com";
        var password = "password";

        //Create User with Email and Password
        firebase.auth().createUserWithEmailAndPassword(email, password).then((response) => {
            console.log(response)
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }
    return (
        <div>
            <button onClick={signUpHandler}>Click</button>

        </div>
    )
}

export default SignUp
