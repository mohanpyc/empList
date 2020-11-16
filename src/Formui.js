import React,{useState} from 'react';
function Formui(props) {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [phNum,setPhNum]=useState("");
    const updateState = (e)=>{
        e.preventDefault();
       if(fname!="" & lname!="" & phNum!=""){
        props.getEmp({fname,lname,phNum});
        setPhNum("")
        setFname("")
        setLname("")
       }
        
    }

    return (
        <div>
             <form onSubmit={updateState}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={(e)=>{setFname(e.target.value)}} value={fname} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={(e)=>{setLname(e.target.value)}}  value={lname} className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input onChange={(e)=>{setPhNum(e.target.value)}} value={phNum} className="form-control" />
                    </div>
                        <button className="btn btn-primary" onClick={updateState}>Submit</button>
                    </form>
        </div>
    )
}
// const mapStateToProps=(state)=>{
//     return {
//         tasks:state.tasks
//     };
// }

export default Formui;
