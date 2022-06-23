import { useState, useEffect } from "react";

export function useLocalStorage(key, defaultValue){

    const [storageValue, setStorageValue] = useState(() => {
        let value = null;
        try{
            value = JSON.parse(localStorage.getItem(key) || JSON.stringify(defaultValue));
        }catch (e){
            console.log(e)
            value = defaultValue
        }
        return value
    });

    useEffect(()=>{
        localStorage.setItem(key, JSON.stringify(storageValue))
    }, [storageValue])


    return [storageValue, setStorageValue]
}