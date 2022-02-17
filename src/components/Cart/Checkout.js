import React, { useRef, useState } from "react";

import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isNotSixChars = (value) => value.trim().length !== 6;

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        pin: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const pinInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPIN = pinInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPINIsValid = !isNotSixChars(enteredPIN);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            pin: enteredPINIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredCityIsValid &&
            enteredPINIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            city: enteredCity,
            pin: enteredPIN,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div
                className={`${classes.control} ${
                    formInputsValidity.name ? "" : classes.invalid
                }`}
            >
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {!formInputsValidity.name && <p>Please enter a valid name</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.street ? "" : classes.invalid
                }`}
            >
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetInputRef} />
                {!formInputsValidity.street && (
                    <p>Please enter a valid street</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.pin ? "" : classes.invalid
                }`}
            >
                <label htmlFor="pin">PIN Code</label>
                <input type="text" id="pin" ref={pinInputRef} />
                {!formInputsValidity.pin && (
                    <p>Please enter a valid PIN code</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.city ? "" : classes.invalid
                }`}
            >
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {!formInputsValidity.city && <p>Please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
