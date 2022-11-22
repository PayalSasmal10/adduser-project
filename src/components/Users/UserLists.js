import React from "react";
import Card from "../UI/Card";

import classes from './UserLists.module.css'

const UserLists = (props) =>{
    return (
        <Card className={classes.users}>
            <ul>
                {props.users.map((user) => {
                    <li >
                        {user.name} ({user.age} years old)
                    </li>
                })}
            </ul>
        </Card>
        
    );
}
export default UserLists;