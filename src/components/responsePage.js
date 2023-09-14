import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import './global.css'
import { fetchDepartmentRequest, updateDepartmentRequest } from "../redux/actions/departmentActions";
import { fetchComplainsRequest, updateComplainRequest } from "../redux/actions/complainAction";


const ResponsePage = () => {
    const [idd, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [complain, setComplain] = useState('');
    const [alert, setAlert] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const complains = useSelector(state => state.complains.complains);
    const [response,setResponse]=useState('')



    const { id } = useParams();
    //     const filteredStudents = students.filter(student =>
    //   student.student_id.toLowerCase().includes(student_id.toLowerCase())
    // );

    useEffect(() => {

    dispatch(fetchComplainsRequest())
}, [])
    useEffect(()=>{
    //  const res = dispatch(fetchDepartmentRequest(department_id));
    console.log(id)
        console.log(complains);
        const response = complains.filter((comp)=> comp.id == id)
        console.log(response)
      setId(response[0].student_id && response[0].student_id)
      setFirstName(response[0].student_first_name)
      setMiddleName(response[0].student_middle_name)
      setLastName(response[0].student_last_name)
      setComplain(response[0].complain)
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: id,
            firstName: firstName,
            lastName: lastName,
            middleName: middleName,
            
        }

          const res =  dispatch(updateComplainRequest(id,response));
            console.log(id)
            console.log(id);
            // if(response.status == 200){
                setAlert(true)
            // }
          
    };
    useEffect(()=>{
        setTimeout(()=>{
            setAlert(false)
        },5000)
    },[alert])
    return (
        <>
            <div>
                <div className="container mt-5">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add department
                                        <Link to="/department" className="btn btn-danger float-end">
                                            Back
                                        </Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        
                                        <div className="mb-3">
                                            <label>Id</label>
                                            <input type="text"
                                                name="fname"
                                                className="form-control"
                                                value={idd}
                                                onChange={(e) => setId(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>First Name</label>
                                            <input type="text"
                                                name="fname"
                                                className="form-control"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Middle Name</label>
                                            <input type="text" name="mname" className="form-control"
                                            value={middleName}
                                                onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="lname" className="form-control"
                                            value={lastName}
                                                onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Complain</label>
                                            <input type="text" name="lname" className="form-control"
                                            value={complain}
                                                onChange={(e) => setComplain(e.target.value)} />
                                        </div>
                                        <label htmlFor="exampleFormControlTextarea1" className="m-3">Response</label>
                                        <textarea
        className="form-control ml-3"
        id="exampleFormControlTextarea1"
        rows="5"
        style={{width: 500, marginLeft: 50}}
        onChange={e => setResponse(e.target.value)}
        // value={title}
      />
      {alert && <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                           response Successfully Commited
                        </Alert>
                    </Stack>}
                                        <div>
                                            <button type="submit" className="btn btn-primary m-4">Submit Response</button>
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

export default ResponsePage;
