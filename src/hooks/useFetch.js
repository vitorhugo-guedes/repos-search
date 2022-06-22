import { useState } from "react"
import { useEffect } from "react"

export function useFetch(options){

    const [data , setData] = useState(null);
    const [error, setError] = useState(null);

    function errorHandler(res){
        if(!res.ok){
            const responseError = {
                status: res.status,
                statusText: res.statusText
            }
            throw(responseError)
        }
        return res.json()
    }

    useEffect(()=>{ 
        if(options.url){
            let isCancelled = false;

            fetch(options.url)
                .then(errorHandler)
                .then(data => {
                    if(!isCancelled){
                        setData(data)
                    }
                })
                .catch(err => {
                    console.error(err);
                    setError(err);
                })

            return ()=> {
                isCancelled = true;
                setError(null);
            }
        }
    }, [options.url]);

    return { data, error }
}

