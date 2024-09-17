import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data,setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false)

    useEffect(()=>{
      // makes abort fetch when user moved out=> efficiency
    const abortCont = new AbortController();
        setTimeout(()=>{
          // console.log(abortCont.signal);
         fetch(url,{signal : abortCont.signal})
        .then(res =>{
            if (!res.ok){ 
            throw Error("Could not able to connect to the Server")
            }
            return res.json(); 
        })
        .then(data => {setData(data);
        setIsPending(false);
       })
       .catch(err => 
         {
          if (err.name == 'AbortError')
          {
            console.log("fetch aborted");
          }
           setError(err.message); 
           setIsPending(false);
        })
     },1000);
    //  special function returned by the useEffect hook.
    // triggered under these conditions: 
    // 1. Component Unmounts
    // 2.Dependency Change
     return ()=>abortCont.abort();
    //  If the component unmounts while the fetch request is still ongoing, 
    // React will call the cleanup function returned by useEffect.
// The cleanup function is defined as return () => abortCont.abort();. 
// This function calls abortCont.abort(), which signals the fetch request to be aborted.
     },[url]) 
    return {data, isPending, error}
}
export default useFetch;