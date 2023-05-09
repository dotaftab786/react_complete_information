import {
   useState,
   useEffect
 } from 'react';
import $ from 'jquery';
import {
  Button,
  Container,
  Card,
  Modal,
} from "react-bootstrap";
 const Http = ()=>{
   const[data,setData] = useState([]);
   const[openModal,setModal] = useState(false);
   const[counter,setCounter] = useState(0);
   const[totalComment,setTotalComment] = useState(0);
   const[animation,setAnimation] = useState("animate__animated animate__bounce");
   const[submit,setSubmit] = useState(true);
   const[fields,setFields] = useState(
     {
       title: "",
       body: ""
     }
      );
   const fetchDataById = ()=>{
     $.ajax({
       type: 'GET',
       url: `http://localhost:3232/${counter}`,
       success: function(response){
         // console.log(response);
         return (
           setData([response]),
           setTotalComment(response.totalComment)
         )
       },
       error: (err)=>{
         if(err.status == 404){
           console.log("data not found")
         }
       }
     });
   }
   useEffect(()=>{
     fetchDataById();
   },[counter]);

   const insertComment = (e)=>{
     e.preventDefault();
     const form = e.target;
     const formData = new FormData(form);
      // console.log(formData.get("title")+formData.get("body"));
      $.ajax({
        type: "POST",
        url: "http://localhost:3232",
        data: formData,
        contentType: false,
        processData: false,
        success: (response)=>{
          return(
          setModal(false),
          setCounter(response.data.id)
        )
        },
        error: (err)=>{
          console.log(err);
        }
      })
   }
   const updateComment = (e)=>{
     e.preventDefault();
     const form = e.target;
     const formData = new FormData(form);
     const id = data[0].id;
     $.ajax({
       type: "PUT",
       url: `http://localhost:3232/${id}`,
       data: formData,
       contentType: false,
       processData: false,
       success: (response)=>{
          return (setModal(false),
          setData([{
            id: id,
            title: formData.get("title"),
            body: formData.get("body")
          }])
        )
       },
       error: (err)=>{
         console.log(err)
       }
     });
}
   const deleteComment = (id)=>{
     $.ajax({
       type: "DELETE",
       url: `http://localhost:3232/${id}`,
       success: (response)=>{
         alert(response.message);
       }
     })
   }

   const next = ()=>{
      return(
        setCounter(counter+1),
        setAnimation("animate__animated animate__slideInLeft")
      )
   }

   const prev = ()=>{
     return(
       setCounter(counter-1),
       setAnimation("animate__animated animate__slideInRight")
     )
   }

   const setValue = (e)=>{
     const input = e.target;
     return(setFields((oldData)=>{
         return {
           ...oldData,
           [input.name]:input.value
         }
       })
     )
   }

   const showModal = (isSubmit)=>{
     //console.log(data[0].title);
     let updateMe = {
       title: "",
       body: ""
     }
     if(!isSubmit){
       updateMe.title = data[0].title;
       updateMe.body = data[0].body;
     }
     return(
       setModal(true),
       setSubmit(isSubmit),
       setFields(updateMe)
     )
   }

 const CardItem = (cardData)=>{
   const design = (
     <>
     <Card className={"mb-3 "+animation}>
         <Card.Header className="d-flex justify-content-between">
         <label>{cardData.newItem.title}</label>
         <div>
         <button className="btn border" style={{marginRight:'3px'}} onClick={()=>showModal(false)}>
         <i className="fa fa-edit"></i>
         </button>
         <button className="btn border" onClick={()=>deleteComment(cardData.newItem.id)}>
         <i className="fa fa-trash"></i>
         </button>
         </div>
         </Card.Header>
         <Card.Body>
           <p>{cardData.newItem.body}</p>
         </Card.Body>
       </Card>
     </>
   );
   return design;
 }

  const design = (
    <>
    <Container className="py-4">
      <div className='d-flex justify-content-between mb-4'>
      <div>
        <h2>Comments - {counter}/{totalComment}</h2>
      </div>
      <div>
        <Button variant='success' onClick={()=>showModal(true)}>New Comment</Button>
      </div>
    </div>
      {
        data.map((item)=>{
        return <CardItem newItem = {item} key={item.id}/>
      })
      }

      <Modal show={openModal} onHide={()=>setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submit ? insertComment : updateComment}>
          <label>Title</label><br />
          <input type="text" name="title" value={fields.title} onChange={setValue} className='form-control'/>
          <br />
          <label>Description </label><br />
          <textarea className='form-control' name='body' value={fields.body} onChange={setValue}></textarea><br />
          {
           submit ? <Button variant="primary" type="submit">Submit</Button> : <Button variant="success" type="submit">Save</Button>
        }
        </form>
        </Modal.Body>
     </Modal>
     <div className='d-flex justify-content-end'>
      <Button variant="info" style={{marginRight:"2px"}} onClick={counter > 0 ? prev : null}>Prev</Button>
      <Button variant="success" onClick={counter < totalComment ? next : null}>Next</Button>
      </div>
    </Container>
    </>
  );
  return design;
}

export default Http;
