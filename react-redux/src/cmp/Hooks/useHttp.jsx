import {
  useState,
  useEffect
} from "react";

import axios from "axios";
const useHttp = (request)=>{
  const[httpResponse,setHttpResponse] = useState(null);
  const[httpError,setHttpError] = useState(null);
  const[httpLoader,setHttpLoader] = useState(true);

  const ajax = ()=>{
    axios(request)
    .then((response)=>{
      setHttpResponse(response.data)
    })
    .catch((err)=>{
      setHttpError(err)
    }).finally(()=>{
      setHttpLoader(false)
    });
  }

  useEffect(()=>{
    if(request){
    ajax();
    }
  },[request]);

    return [httpResponse,httpError,httpLoader];
}

export default useHttp;
