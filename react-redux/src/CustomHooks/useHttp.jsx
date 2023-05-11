import {
  useEffect,
  useState
} from "react";
import $ from 'jquery';
const useHttp = (request)=>{
  const[response,setResponse] = useState([]);
  if(request.type === "POST" || request.type == "PUT"){
    request.processData = false;
    request.contentType = false;
  }
  useEffect(()=>{
    $.ajax(request);
  },[request])
  request.success = (r)=>{
     return setResponse(r);
  }
  return [response];
}

export default useHttp;
