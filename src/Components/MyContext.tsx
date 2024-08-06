import React, { createContext, useEffect, useState } from "react";
import request from 'superagent'
import { parseCookies, setCookie } from "nookies";
import PersonalInfo from "@/pages/personalinfo";

type UserInfo = {

}

export const MyContext = createContext({} as any);

const ContextAuth = ({ children }: any) => {
    const [inputData, setInputData] = useState({} as UserInfo);
    console.log(inputData, "profilename????????????")

    const getapi = async () => {
        //   debugger
        try {
            let getCookies = parseCookies(null, "token");
            const res = await request.get('http://139.59.47.49:4004/api/profile').set("Authorization", `${getCookies?.token}`);

            //   const data = await res.json();
            //   setName(data); 
            console.log('response', res.body)
            setInputData(res.body.profile)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        getapi();
    }, []);

    return (
        <MyContext.Provider value={{
            inputData
        }}>
            {children}

        </MyContext.Provider>
    );

};

export default ContextAuth;
