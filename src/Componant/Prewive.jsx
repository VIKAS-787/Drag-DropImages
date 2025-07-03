import React from 'react'

function Prewive({fileDetails,removePrewive}) {
    console.log(fileDetails)
  return (
    <div>
      {fileDetails.map((curr, index) => {
        let imgURL = URL.createObjectURL(curr);
        return (
          <div key={index} className='prewive-container'>
            <div className='info'>
              <img src={imgURL} alt="" />
              <div>
                <span>{curr.name}</span> <br />
                <span>{curr.lastModified}</span>
              </div>
            </div>
            <button onClick={()=>removePrewive(index)}>X</button>
          </div>
        );
      })}
    </div>
  )
}

export default Prewive