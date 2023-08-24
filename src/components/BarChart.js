import React, { useEffect, useState } from 'react';
import {
    Chart as chartjs,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartmentsRequest } from '../redux/actions/departmentActions';


chartjs.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)
const BarChart = () => {
    const dispatch = useDispatch();
const departments = useSelector(state => state.departments.departments);

useEffect(() => {
    // Dispatch the fetchStudentsRequest action when the component mounts
    dispatch(fetchDepartmentsRequest());
  }, []);

  const dept = []
  const intake = []
  for(let i=0;i<departments.length;i++){
     dept[i] = departments[i].department
     intake[i] = departments[i].intake
  }
  const data = {
    labels: dept,
    datasets: [
      {
        label: '',
        data: intake,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };


  const options = {

  }

  return (
    <div style={{width: '80%', height: '80%'}}>
      <h4 style={{fontWeight: 'lighter', color: 'grey'}}>Department Destribution</h4>
      <Bar data={data}
      options={options}
       />
    </div>
  );
};

export default BarChart;