import React,{createContext,useReducer} from "react";
import {v4 as uuidv4} from "uuid";
 
export const ToastContext=createContext();

export const ToastContextProvider=(props)=>{


    const notifications=[
        {
        id: uuidv4(),
        type: "SUCCESS",
        title:"Success",
        message:"Successfully Retrieved all data",
    },
    {
        id:uuidv4(),
        type:"INFO",
        title:"Information",
        message:"This is for your information"
    },
    {
        id:uuidv4(),
        type: "WARNING",
        title:"Warning",
        message:"This is a warning message",
    },
    {
        id:uuidv4(),
        type:"DANGER",
        title:"Error",
        message:"This is an error message"
    },
];

    const [state,dispatch]=useReducer((state,action)=>{

        switch(action.type){
            case "ADD_NOTIFICATION":
                return [...state,action.payload];
            case "DELETE_NOTIFICATION":
                return state.filter((notification)=> notification.id!=action.payload);
            default:
                return state;
        }
    },notifications)

    

    // dispatch({type:"ADD_NOTIFICATION",payload: {id,type,title,message}})

    // dispatch({type:"DELETE NOTIFICATION",payload:id})

    return(
        <ToastContext.Provider value={{state,dispatch}}>
            {props.children}
        </ToastContext.Provider>
    )
}