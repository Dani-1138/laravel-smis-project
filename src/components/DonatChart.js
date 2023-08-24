import React, { useEffect } from 'react';
import {
    Chart as chartjs,
    ArcElement,
    Tooltip,
    Legend
} from 'chart.js'
import { Doughnut } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudentsRequest } from '../redux/actions/studentActions';

chartjs.register(
    ArcElement,
    Tooltip,
    Legend
)
const DoughnutChart = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);

    useEffect(() => {
        dispatch(fetchStudentsRequest());
      }, []);

      const high = students.filter((student)=> student.total_point > 80);
      const medium = students.filter((student)=> student.total_point > 50 && student.total_point < 80);
      const low = students.filter((student)=> student.total_point < 50);

  const data = {
    labels: ['Deans list', 'Pass', 'Fail'],
    datasets: [
      {
        data: [high.length, medium.length, low.length],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  };


  const options = {

  }

  return (
    <div style={{width: '80%', height: '80%'}}>
      <h4 style={{fontWeight: 'lighter', color: 'grey'}}>Student Status</h4>
      <Doughnut data={data}
      options={options}
       />
    </div>
  );
};

export default DoughnutChart;