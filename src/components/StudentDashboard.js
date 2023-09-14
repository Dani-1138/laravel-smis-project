import { useDispatch, useSelector } from "react-redux";
import BarChart from "./BarChart";
import DoughnutChart from "./DonatChart";
import { fetchStudentRequest, fetchStudentsRequest } from "../redux/actions/studentActions";
import { useEffect, useState } from "react";
import { fetchComplainRequest, fetchComplainsRequest } from "../redux/actions/complainAction";
import { fetchNotificationRequest } from "../redux/actions/notificationAction";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const StudentDashboard =()=>{
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);
    const userRole = useSelector(state=> state.role.role)
    const complains = useSelector(state => state.complains.complains)
    const notifications = useSelector(state => state.notification.notification);
    const departments = useSelector(state=> state.departments.departments)
    

    const [res, setRes] = useState('')
    const [tot,setTot] = useState('')
    useEffect(() => {
       const res =  dispatch(fetchComplainsRequest())
       dispatch(fetchComplainsRequest())
       

        // dispatch(fetchComplainRequest(userRole[0].user_id));

      }, []);
      const resStu = complains.filter((comp)=> comp.student_id == userRole[0].user_id)
      const stu = students.filter((stu)=> stu.student_id == userRole[0].user_id)
    useEffect(() => {
        dispatch(fetchStudentsRequest(userRole.user_id));
        const stu = students.filter((stu)=> stu.student_id == userRole.user_id)
        
        console.log(students)
        console.log(students[0]?.total_point)
        console.log(stu)
        dispatch(fetchNotificationRequest());
        setTot(stu[0]?.total_point)
    },[])

    //   const qualified = students.filter((student)=> student.total_point > 50);
    return(
        <>
        <div className="container-fluid">

{/*  <!-- Page Heading --> */}
<div className="d-sm-flex align-items-center justify-content-between mb-4">
    {/* <h1 className="h3 mb-0 text-gray-800">Dashboard</h1> */}
    {/* <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
        className="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
</div>

{/*  <!-- Content Row --> */}
<div className="row">

    {/*  <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                  <div className="col mr-2">
                         <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Complain Response</div>
                           <div className="h5 mb-0 font-weight-bold text-gray-800">{resStu[0]?.complain}</div>
                    </div>
                    <div className="col-auto">
                        {/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Total Point(100%)</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{stu[0]?.total_point}</div>
                    </div>
                    <div className="col-auto">
                        {/* <i className="fas fa-dollar-sign fa-2x text-gray-300"></i> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/*  <!-- Earnings (Monthly) Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Total notification
                        </div>
                        <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                                <div className="h5 mb-0 ml-3 mr-3 font-weight-bold text-gray-800">{notifications.length}</div>
                            </div>
                            <div className="col">
                                {/* <div className="progress progress-sm mr-2">
                                    <div className="progress-bar bg-info a1" role="progressbar"
                                    ></div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        {/* <i className="fas fa-clipboard-list fa-2x text-gray-300"></i> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  <!-- Pending Requests Card Example --> */}
    <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
                <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                        <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            total department</div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">{departments.length}</div>
                    </div>
                    <div className="col-auto">
                        {/* <i className="fas fa-comments fa-2x text-gray-300"></i> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    {notifications.map(notify=><Stack>
       <Alert severity="info">
        <AlertTitle>{notify.title}</AlertTitle>
        {notify.description} — <strong>{notify.created_at}</strong>
      </Alert>
      </Stack>)}
</div>

{/*  <!-- Content Row --> */}

</div>
        </>
    )
}

export default StudentDashboard;