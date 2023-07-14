import React, { useState } from 'react';

const AddTodo = (props) => {
   const[title, setTitle] =  useState("");
   const[description, setdescription] =  useState("");

   const submit = (e) => {
    e.preventDefault();
    if(!title || !description){
        alert("Title or Description must not be empty!");
    }
    else{
      props.addTask(title, description);
    }
    setTitle("");
    setdescription("");
   }
  return (
    <>
    <div className='container my-3'>
    <h3 style={{ marginTop: "23px" }}>Add A Task</h3>

      <form onSubmit={submit}>
  <div className="mb-3"/>
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title" aria-describedby="emailHelp"/>
    
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Description</label>
    <input type="text" className="form-control" value={description} onChange={(e)=>setdescription(e.target.value)} id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Submit</button>
</form>
</div>
    </>
  )
}

export default AddTodo