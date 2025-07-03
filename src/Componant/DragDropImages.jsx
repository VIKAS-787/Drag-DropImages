import React, { useState } from 'react'
import Prewive from './Prewive';

function DragDropImages() {
    const [files,setFiles] = useState([]);
    const [drag,setDrag] =useState(false);
    const handelImages =(event)=>{
    let selectFiles = event.target.files;
    setFiles([...files,...selectFiles]);
    }
    console.log(files);
    const removePrewive =(id)=>{
      console.log(id)
     let filterData = files.filter((curr,index)=>{
      return index != id;
     })
     setFiles(filterData);
    }
    const handelDragEnter = (e)=>{
     e.preventDefault();
     console.log(e);
     setDrag(true);
    }
    const handelDragLeave =(e)=>{
      e.preventDefault();
      console.log(e);
      setDrag(false);
    }
  return (
    <div className='container'>
        <div onDragEnter={handelDragEnter}  onDragLeave={handelDragLeave}  className={`uploadimages ${drag ? 'draging' : ""}`}>
            <p>Drag & Drop Files.....</p>
            <input multiple type="file" id='input-file' className='inputfiles' placeholder='Choose File'onChange={handelImages} />
            <label htmlFor="input-file">Browers Files</label>
        </div>
        {files.length>0 ? <Prewive removePrewive ={removePrewive}  fileDetails={files}/> : ""}
    </div>
  )
}

export default DragDropImages;