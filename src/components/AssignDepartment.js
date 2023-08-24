import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartmentsRequest } from '../redux/actions/departmentActions';
import Button from '@mui/material/Button';

import { updateDepartment } from '../redux/actions/chooseDepartmentAction';
import { fetchStudentRequest, fetchStudentsRequest } from '../redux/actions/studentActions';
import { updateStudentDepartment, updateStudentDepartmentAssign } from '../redux/actions/studentDeparatmentAction';
import { fetchStatusRequest, updateExamStatusRequest } from '../redux/actions/statusAction';

export default function AssignDepartment() {
  const [choices, setChoices] = useState([]);
  
  const dispatch = useDispatch();
  const departments = useSelector((state) => state.departments.departments);
  const loading = useSelector((state) => state.departments.loading);
  const error = useSelector((state) => state.departments.error);
  const students = useSelector(state => state.students.students);
  const statuses = useSelector(state => state.status.status);
  const [examStatus,setExamStatus] = useState(false);
  // const dept = JSON.parse(students[0].choosen_department);
  
    useEffect(() => {
      // Dispatch the fetchStudentsRequest action when the component mounts
      dispatch(fetchStudentsRequest());
  }, [choices]);

    useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    dispatch(fetchDepartmentsRequest());
    console.log(departments);
  }, []);

  useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    const re = dispatch(fetchStatusRequest());
    setExamStatus(statuses[0]?.exam)
  //  statuses[0].length > 0 && setExamStatus(statuses[0].exam)
  }, [examStatus]);

  const handleExamStatus =()=>{
    
    dispatch(updateExamStatusRequest(1,!statuses[0].exam))
     dispatch(fetchStatusRequest());
    setExamStatus(statuses[0].exam)
  }

  const handleFormSubmit = () => {
    students.sort((a, b) => b.total_point - a.total_point);
    console.log(students.sort((a, b) => b.total_point - a.total_point))

    // Initialize department capacities
    const departmentCapacities = departments.map(dep => ({ department: dep.department, capacity: dep.intake }));
    console.log(departmentCapacities)
    // Assign students to departments based on their results and intake capacity
    students.forEach(student => {
      // Sort the student's choices based on the department capacity (in ascending order)
        console.log(student.choosen_department)
     const sortedChoices = JSON.parse(student.choosen_department);
     console.log(sortedChoices)
  
      // Assign the student to the first available choice that has capacity
      for (const choice of sortedChoices) {
        const department = departmentCapacities.find(dep => dep.department === choice);
        if (department && department.capacity > 0) {
          // Assign the student to the department
         dispatch(updateStudentDepartmentAssign(student.student_id, choice));
          // Reduce the capacity of the department
          console.log(choice)
          department.capacity--;
          break;
        }
        console.log(department)
      }
    });
    
    console.log("Department assigned")
  };


  return (
    <div className="container mt-5">
     
     <Button variant="contained" color="success" onClick={handleExamStatus}>
     {examStatus ? 'HIDE EXAM':'VIEW EXAM' }
      </Button>
      <Button variant="contained" onClick={handleFormSubmit}>
        Assign Department
      </Button>
      </div>
  );
}

