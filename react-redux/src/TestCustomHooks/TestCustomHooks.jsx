import {
  useState
} from 'react';
import useHttp from '../CustomHooks/useHttp';

const TestCustomHooks = ()=>{
  const[request,setRequest] = useState({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts"
  });

  const[response] = useHttp(request);

  const createPost = (e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    return setRequest({
        type: "POST",
        url: "http://localhost:3232",
        data: formData
    })
  }

  const design = (
    <>
      <form onSubmit={createPost}>
      <div className="w-50 m-4">
        <div className="mb-3">
          <input type="text" className="form-control"/>
        </div>
        <div>
          <textarea className="form-control mb-4" row="5"></textarea>
        </div>
        <button className="btn btn-danger">Submit</button>
        </div>
        {request.type === "POST" ? JSON.stringify(response) : null}
      </form>
    </>
  );
  return design;
}

export default TestCustomHooks;
