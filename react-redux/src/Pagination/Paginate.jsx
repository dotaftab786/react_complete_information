import {
  useEffect,
  useState
} from "react";

import $ from 'jquery';
const Paginate = ()=>{
  const[data,setData] = useState([]);
  const[start,setStart] = useState(0);
  const getData = ()=>{
    $.ajax({
      type: "GET",
      url: `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=16`,
      success: (response)=>{
        response.map((items)=>{
          return setData((oldData)=>{
            return [
              ...oldData,
              items
            ]
          })
        })
      }
 });
  }

  const infiniteScroll = ()=>{
    window.onscroll = ()=>{
      let windowS = (window.innerHeight+window.scrollY);
      const bodyHeight = (document.body.offsetHeight-70);
      if(windowS >= bodyHeight){
        return setStart(start+16);
      }
  }
}
  useEffect(()=>{
    getData();
    infiniteScroll();
  },[start]);

  const downloadNow = (data)=>{
    const a = document.createElement("A");
    a.href =data.url;
    a.download = "Pic-"+data.id+".png";
    a.click();
  }

  const Column = ({data})=>{
    return (<div className="col-md-3">
      <div className="card mb-3">
        <img src={data.url} alt="pic"/>
        <div className="card-body">
          {
            data.title
          }
        </div>
        <button className="btn btn-danger" onClick={()=>downloadNow(data)}>
          Download
        </button>
      </div>
    </div>
  )
  }

  const design = (
    <>
      <div className="container py-4">
        <h3>Paginate Image</h3>
        <hr />
        <div className="row">
          {
            data.map((item)=>{
              return <Column data={item} key={item.id}/>
            })
          }
        </div>
      </div>
    </>
  );
  return design;
}

export default Paginate;
