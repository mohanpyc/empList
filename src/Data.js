import React from 'react'

function Data({list,empGet,View}) {

console.log(list,empGet,View)
  const delItem = (emp) =>{
    empGet(emp);
  }

  const item=list.map((i,index)=>{
    if(View==="tile"){
      return <div className="card" key={index} >
              <div className="card-body">
              <h5 className="card-title">{i.fname} <span>{i.lname} </span> </h5>
              <h5 className="card-title">{i.phNum}</h5>
              <a href="#" onClick={()=>delItem(i)} className="btn btn-danger">Delete</a>
              </div>
            </div>
    }else if(View==="grid"){
     return <tr>
                
                <td className="text-center text-info">{i.fname}</td>
                <td className="text-center text-info">{i.lname}</td>
                <td className="text-center text-primary">{i.phNum}</td>
                <td className="text-center text-danger"> <i className="fa fa-trash"> </i> </td>
            </tr>
    }
    
  })

  if(View==="grid"){
    return <div>
      <table class="table">
        {/* <thead>
          <tr>
            
              <th scope="row">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Action</th>
          </tr>
        </thead> */}
        <tbody>
          {item}
        </tbody>
        </table>
    </div>
  }

    return (
          <div>
            {item}
          </div>
            
    );
}

export default Data
