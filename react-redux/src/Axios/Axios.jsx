import axios from 'axios';
import {
  useEffect
} from 'react';
const Axios = ()=>{

  const getData = async()=>{
    // one way to make api call
    // axios.get("https://jsonplaceholder.typicode.com/posts")
    // .then((response)=>{
    //   const {data} = response;
    //   console.log(data)
    // })
    // .catch((err)=>{
    //   console.log(err)
    // });
  try {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
  } catch (e) {
    console.log(e);
  }

  }

  const cretatePost = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try{
      const {data} = await axios.post("http://localhost:3232",formData);
      console.log(data);
    } catch(err){
      console.log(err);
    }

  }

  const updatePost = async(e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    try {
    const response = await axios.put("http://localhost:3232/1",formData);
    console.log(response);
  } catch(err){
    console.log(err);
  }
  }

  const deletePost = async ()=>{
    try{
      const response = await axios.delete("http://localhost:3232/2");
      console.log(response);
    } catch(e){
      console.log(e);
    }
  }

  useEffect(()=>{
    getData();
    deletePost();
  },[]);
  const design = (
    <>
    <form onSubmit={updatePost}>
    <div className='w-50 m-3'>
      <div className="mb-3">
        <input type='text' name="title" className='form-control'/>
      </div>
      <div className='mb-3'>
        <textarea name="body" className="form-control" row="5"></textarea>
      </div>
      <button className='btn btn-danger'>Update</button>
      </div>
    </form>
    </>
  );
  return design;
}
export default Axios;
