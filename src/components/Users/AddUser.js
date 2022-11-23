import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [actualError, setActualError] = useState('');

    const addUserHandler = (e) =>{
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setActualError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values).",
            });
            return;

        }
        if(+enteredAge < 1){
            setActualError({
                title: "Invalid Age",
                message: "Please enter a valid age (> 0).",
            });
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
       
    }

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageHandler = (event) =>{
        setEnteredAge(event.target.value);
    }

    const errorHandler = () => {
        setActualError(null);
    }

    return (
        <div>
        {actualError && <ErrorModal title={actualError.title} message={actualError.message} onConfirm={errorHandler}/>}
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameHandler}></input>
                <label htmlFor="age">Age (Year)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageHandler}></input>
                <Button type="submit">Add User</Button>
                
            </form>
        </Card>
        </div>
        
    );
};

export default AddUser;