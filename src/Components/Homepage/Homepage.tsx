import React, { useContext } from 'react'
import { myContext } from '../../Context';
import { IUser } from '../../types/maintypes';

export default function Homepage() {

    const userObject = useContext(myContext) as IUser;

    return (
        <div>
            {
                userObject ? (
                    <h1>Welcome back {userObject.username}</h1>
                ) : (
                        <h1>이제 제발 좀 되라..</h1>
                    )
            }
        </div>
    )
}
