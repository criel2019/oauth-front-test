import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import { AxiosResponse } from 'axios';


export default function Context(props: any) {

    const [userObject, setUserObject] = useState<any>();

    useEffect(() => {
        axios.get("https://criel.herokuapp.com/getuser", { withCredentials: true }).then((res: any) => {
            console.log(res);
            if (res.data) {
                setUserObject(res.data);
            }
        })
    }, [])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}
export const myContext = createContext({});