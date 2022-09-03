import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGreeting} from "../redux/greetings/greetings";


export default function Greeting() {
    const helloMessage = useSelector((state) => state.greeting)
    const dispatch = useDispatch();

    const greeting = () => {
        dispatch(getGreeting())
    }
    return (
        <React.Fragment>
            <p>Hello {helloMessage}</p>
            <button className="getThingsBtn" onClick={greeting}>Say Hello
            </button>
        </React.Fragment>
    );
}
