import { useState } from "react";
import { Link } from "react-router-dom"
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { addStudentRequest } from '../redux/actions/studentActions';
import './global.css'
import { addUserRequest } from "../redux/actions/userAction";


const AddNewStudent = () => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sex, setSex] = useState('');
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState(0);
    const [entranceResult, setEntranceResult] = useState(0);
    const [cgpa, setCgpa] = useState(0);
    const [cocResult, setCocResult] = useState(0);
    const [department, setDepartment] = useState('');
    const [batch, setBatch] = useState(0);
    const [status, setStatus] = useState('');

    const [alert, setAlert] = useState(false)
    const [err, setErr] = useState(false)
    const dispatch = useDispatch();
    const loading = useSelector(state => state.students.loading);
    const error = useSelector(state => state.students.error);
    const statuss = useSelector(state => state.students.statuss);
    const usererr = useSelector(state => state.user.error);


    const data = {
        student_id: id,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        password: password,
        sex: sex,
        age: age,
        phone: phone,
        entranceResult: entranceResult,
        cgpa: cgpa,
        cocResult: cocResult,
        department: department,
        batch: batch,
        status: status
    }
    const userData = {
        user_id:id,
        firstName:firstName,
        middleName:middleName,
        lastName:lastName,
        email:email,
        password:password,
        role:"student",

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(id == '' || firstName == '' || middleName == '' || password == '' || age == '' && sex == ''){
            setErr(true)
            setTimeout(()=>setErr(false),3000)
        }else{
      const response =  dispatch(addStudentRequest(data));
        const sresponse = dispatch(addUserRequest(userData));
        // if(sresponse){
            setAlert(true)
            console.log(statuss)
            setTimeout(()=>setAlert(false),3000)
        //     setFirstName('');
        //     setMiddleName('');
        //     setLastName('');
        //     setDepartment('');
        //     setCgpa('');
        //     setPassword('');
        //     setPhone('');
        //     setEntranceResult('');
        //     setEmail('');
        //     setId('');
        //     setSex('');
        //     setStatus('');
        //     setAge('');
        //     setBatch('');
        // }
    }
    };
    return (
        <>
            <div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Add Student
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
                                                onChange={(e) => setId(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>First Name</label>
                                            <input type="text"
                                                name="fname"
                                                className="form-control"
                                                onChange={(e) => setFirstName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Middle Name</label>
                                            <input type="text" name="mname" className="form-control"

                                                onChange={(e) => setMiddleName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Last Name</label>
                                            <input type="text" name="lname" className="form-control"

                                                onChange={(e) => setLastName(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Email</label>
                                            <input type="email" name="email" className="form-control"

                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Password</label>
                                            <input type="text" name="password" className="form-control"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Age</label>
                                            <input type="text" name="age" className="form-control"

                                                onChange={(e) => setAge(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Sex</label>
                                            <input type="text" name="sex" className="form-control"

                                                onChange={(e) => setSex(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Phone Number</label>
                                            <input type="phone" name="phone" className="form-control"

                                                onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Batch</label>
                                            <input type="text" name="batch" className="form-control"

                                                onChange={(e) => setBatch(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Department</label>
                                            <input type="text" name="dept" className="form-control"

                                                onChange={(e) => setDepartment(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>COC Result</label>
                                            <input type="text" name="coc" className="form-control"

                                                onChange={(e) => setCocResult(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Entrace Result</label>
                                            <input type="text" name="entrance" className="form-control"
                                                onChange={(e) => setEntranceResult(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>CGPA</label>
                                            <input type="text" name="gpa" className="form-control"
                                                onChange={(e) => setCgpa(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Status</label>
                                            <input type="text" name="status" className="form-control"

                                                onChange={(e) => setStatus(e.target.value)} />
                                        </div>
                                        {alert && <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                           Student Successfully Registered'
                        </Alert>
                    </Stack>}
                    {err && <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Fill all required fields  — <strong>check it out!</strong>
      </Alert></Stack>}
                                        <div>
                                            <button type="submit" className="btn btn-primary">Save Student</button>
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

export default AddNewStudent;
