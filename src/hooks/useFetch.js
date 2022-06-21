import { useState } from "react"
import { useEffect } from "react"

export function useFetch(options){

    const [data , setData] = useState(null);
    const [error, setError] = useState(null);
    const [isFetching, setIsFetching] = useState(true);

    function errorHandler(response){
        if(!response.ok){
            const responseError = {
                status: response.status,
                statusText: response.statusText
            }
            throw(responseError)
        }
        return response.json()
    }

    useEffect(()=>{ 
        console.log('UseEffect: useFetch')
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
                .finally(()=> {
                    setIsFetching(false);
                })

            return ()=> {
                isCancelled = true;
            }
        }
    }, [options.url]);

    return { data, error, isFetching }
}

