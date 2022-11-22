import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (e) =>{
        e.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            return;
        }
        if(+enteredAge < 1){
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

    return (
        <Card className={styles.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={usernameHandler}></input>
                <label htmlFor="age">Age (Year)</label>
                <input id="age" type="number" value={enteredAge} onChange={ageHandler}></input>
                <Button type="submit">Add User</Button>
                
            </form>
        </Card>
        
    );
};

export default AddUser;