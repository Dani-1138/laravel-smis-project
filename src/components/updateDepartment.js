import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import './global.css'
import { fetchDepartmentRequest, updateDepartmentRequest } from "../redux/actions/departmentActions";


const UpdateDepartment = () => {
    const [id, setId] = useState('');
    const [intake, setIntake] = useState('');
    const [status, setStatus] = useState('');
    const [department, setDepartment] = useState('');
    const [alert, setAlert] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const departments = useSelector(state => state.departments.departments);
    const loading = useSelector(state => state.departments.loading);
    const error = useSelector(state => state.departments.error);

    const { department_id } = useParams();
    //     const filteredStudents = students.filter(student =>
    //   student.student_id.toLowerCase().includes(student_id.toLowerCase())
    // );
    const idd = department_id;


    useEffect(()=>{
    //  const res = dispatch(fetchDepartmentRequest(department_id));
        // console.log(res);
        const UpdateDepartment = departments.filter((dep)=> dep.id == department_id)
        console.log(UpdateDepartment)
      setDepartment(UpdateDepartment[0].department && UpdateDepartment[0].department)
      setStatus(UpdateDepartment[0].status)
      setIntake(UpdateDepartment[0].intake)
      console.log(departments)
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            department: department,
            intake: intake,
            status: status,
        }
     dispatch(updateDepartmentRequest(idd,data));
      setAlert(true)
      navigate('/department')
    };
    return (
        <>
            <div>
                <div className="container mt-5">
                    {alert && <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                           Department Successfully Updeted
                        </Alert>
                    </Stack>}
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
                                            <label>Department</label>
                                            <input type="text"
                                                name="fname"
                                                className="form-control"
                                                value={department}
                                                onChange={(e) => setDepartment(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Intake</label>
                                            <input type="text" name="mname" className="form-control"
                                            value={intake}
                                                onChange={(e) => setIntake(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label>Status</label>
                                            <input type="text" name="lname" className="form-control"
                                            value={status}
                                                onChange={(e) => setStatus(e.target.value)} />
                                        </div>
                                       
                                        <div>
                                            <button type="submit" className="btn btn-primary">Save Department</button>
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

export default UpdateDepartment;
