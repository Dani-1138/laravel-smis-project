import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchStudentRequest } from '../redux/actions/studentActions';
import { grey } from '@mui/material/colors';
import './student-detail.css'
import { useParams } from 'react-router-dom';


const StudentDetail = () => {

    const dispatch = useDispatch();

    const students = useSelector(state => state.students.students);
    const users = useSelector(state => state.user.role);
    const statuses = useSelector(state => state.status.status);
    const studentId = users ? users[0]?.student_id : ''

    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        // Dispatch the fetchStudentsRequest action when the component mounts
        dispatch(fetchStudentRequest(id));
        // dispatch(fetchUsersRequest());
    }, [students]);


    return (
        <div className='main'>

            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    {/*  <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h3 style={{ fontWeight: '500', color: grey }}>Personal Information</h3>

                    </div>
                    {/*  <!-- Card Body --> */}
                    <div className="card-body">
                        <div className='info-list'>
                        <div>
                                <h5 className='list-title'>
                                    Id
                                </h5>
                                <h6 className='list-value'>
                                    {students.length > 0 ? students[0].student_id : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    First Name
                                </h5>
                                <h6 className='list-value'>
                                    {students.length > 0 ? students[0].firstName : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Middle Name
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].middleName : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Last Name
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].lastName : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                   Email
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].email : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                   Phone Number
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].phone : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Sex
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].sex : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Age
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].age : '---'}
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                    {/*  <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">

                        <h3 style={{ fontWeight: '500', color: grey }}>Academic Status</h3>
                    </div>
                    {/*  <!-- Card Body --> */}
                    <div className="card-body">
                    <div className='info-list'>
                            <div>
                                <h5 className='list-title'>
                                    Entrance Result
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].entranceResult : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    CGPA
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].cgpa : '---'}
                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    COC result
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].cocResult : '---'}

                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Total point(100%)
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].total_point : '---'}

                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Department
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].department : '---'}

                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Batch
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].batch : '---'}

                                </h6>
                            </div>
                            <div>
                                <h5 className='list-title'>
                                    Status
                                </h5>
                                <h6 className='list-value'>
                                {students.length > 0 ? students[0].status : '---'}
                                </h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentDetail