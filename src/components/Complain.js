import { useState } from "react";
import { Link } from "react-router-dom"
import Api from "./Api";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentRequest } from '../redux/actions/studentActions';
import './global.css'
import TextField from '@mui/material/TextField';
import { addComplainRequest } from "../redux/actions/complainAction";

const Complain = ()=>{
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [complain, setComplain] = useState('');
   ;
      const dispatch = useDispatch();
      const loading = useSelector(state => state.complains.loading);
      const error = useSelector(state => state.complains.error);
    
      const data = {
        student_id:id,
        student_first_name:firstName,
        student_middle_name:middleName,
        student_last_name:lastName,
        complain_type:"department",
        complain:complain,
    }

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addComplainRequest(data));
        console.log(data);
      };


    // const addStudent =()=>{
       

    //     console.log(data);
    //     http.post('/addStudent', data).then(res=>{
    //         console.log(res);
    //         if(res.data.status == 422){
    //             console.log("Error happen");
    //         }
    //     });
    // }

    return(
        <>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Create Complain
                                    <Link to="/view-student" className="btn btn-danger float-end">
                                        Back
                                    </Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-3">
                                            <label>Id</label>
                                            <input type="text" name="id" className="form-control"
                                            onChange={(e) => setId(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>First Name</label>
                                            <input type="text"
                                             name="fname" 
                                             className="form-control"
                                             onChange={(e) => setFirstName(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Middle Name</label>
                                            <input type="text" name="mname" className="form-control"
                                            
                                            onChange={(e) => setMiddleName(e.target.value)}/>
                                        </div>
                                        <div className="mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="lname" className="form-control"
                                           
                                            onChange={(e) => setLastName(e.target.value)}/>
                                        </div>
                                        
                                       
                                        <div className="mb-3">
                                            {/* <label>Complain</label> */}
                                            {/* <input type="text" name="complain" className="form-control"
                                            
                                            onChange={(e) => setAge(e.target.value)}/> */}
                                            <TextField id="outlined-basic" label="Complain" variant="outlined" onChange={(e) => setComplain(e.target.value)}/>
                                        </div>
                                    
                            
                                        <div>
                                            <button type="submit"  className="btn btn-primary">Submit Complain</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Complain;
