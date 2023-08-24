import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { Button, Modal, Input } from 'react-bootstrap';
//cp
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentRequest, fetchStudentsRequest } from '../redux/actions/studentActions';
import { fetchUsersRequest } from "../redux/actions/userAction";


function StudentPlacement() {

    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);
    const loading = useSelector(state => state.students.loading);
    const userRole = useSelector(state => state.role.role);
    console.log(students)
    useEffect(() => {
        // Dispatch the fetchStudentsRequest action when the component mounts
        dispatch(fetchStudentRequest(userRole[0].user_id));
        // dispatch(fetchUsersRequest());
    }, [students]);

    if (loading) {
        return <div>Loading...</div>;
    }


    return (

        <div class="container ">
            <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
                <div class="row ">

                    <div class="col-sm-3 mt-5 mb-4 text-gred">
                        <div className="search">
                            <form class="form-inline">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search Student" aria-label="Search" />

                            </form>
                        </div>
                    </div>
                    <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred" style={{ color: "green" }}><h2><b>Placement</b></h2></div>
                    <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
{/* 
                        <Button variant="primary" >
                            Add New Student
                        </Button> */}
                    </div>
                </div>
                <div class="row">
                    <div class="table-responsive " >
                        <table class="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>First Name </th>
                                    <th>Middle Name</th>
                                    <th>Last Name </th>
                                    <th>Entrace Result(20%)</th>
                                    <th>CGPA(50%)</th>
                                    <th>COC Result(30%)</th>
                                    <th>Total(100%)</th>
                                    <th>Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map(student =>
                                    <tr>
                                        <td>{student.student_id}</td>
                                        <td>{student.firstName}</td>
                                        <td>{student.middleName}</td>
                                        <td>{student.lastName}</td>
                                        <td>
                                            {student.entranceResult}</td>
                                        <td>
                                            {student.cgpa}
                                        </td>
                                        <td>
                                            {student.cocResult}
                                        </td>
                                        <td>
                                            {student.total_point}
                                        </td>
                                        <td>
                                            {student.department}
                                        </td>
                                    </tr>)}

                                {/* <tr>
                            <td>2</td>
                            <td>Demark</td>
                            <td>City Road.13</td>
                            <td>Dubai</td>
                            <td>UAE</td>
                            <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
                         
 
                        <tr>
                            <td>3</td>
                            <td>Richa Deba</td>
                            <td>Ocol Str. 57</td>
                            <td>Berlin</td>
                            <td>Germany</td>
                            <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
                        <tr>
                            <td>4</td>
                            <td>James Cott</td>
                            <td>Berut Road</td>
                            <td>Paris</td>
                            <td>France</td>
                            <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>5</td>
                            <td>Dheraj</td>
                            <td>Bulf Str. 57</td>
                            <td>Delhi</td>
                            <td>India</td>
                            <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr>
 
 
                        <tr>
                            <td>6</td>
                            <td>Maria James</td>
                            <td>Obere Str. 57</td>
                            <td>Tokyo</td>
                            <td>Japan</td>
                            <td>
                            <a href="#" class="view" title="View" data-toggle="tooltip" style={{color:"#10ab80"}}><i class="material-icons">&#xE417;</i></a>
                                <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                <a href="#" class="delete" title="Delete" data-toggle="tooltip" style={{color:"red"}}><i class="material-icons">&#xE872;</i></a>
                            </td>
                        </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default StudentPlacement;