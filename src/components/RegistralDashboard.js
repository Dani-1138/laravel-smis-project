import { useDispatch, useSelector } from "react-redux";
import BarChart from "./BarChart";
import DoughnutChart from "./DonatChart";
import { fetchStudentsRequest } from "../redux/actions/studentActions";
import { useEffect } from "react";

const RegistralDashboardComponent = () => {
    const dispatch = useDispatch();
    const students = useSelector(state => state.students.students);

    useEffect(() => {
        dispatch(fetchStudentsRequest());
    }, []);

    const qualified = students.filter((student) => student.total_point > 50);
    return (
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
                                            Qualified Students</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{qualified.length}</div>
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
                                            Manage Students</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">######</div>
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
                                        <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Manage Departments
                                        </div>
                                        <div className="row no-gutters align-items-center">
                                            <div className="col-auto">
                                                <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">#####</div>
                                            </div>
                                            <div className="col">
                                                <div className="progress progress-sm mr-2">
                                                    <div className="progress-bar bg-info a1" role="progressbar"
                                                    ></div>
                                                </div>
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
                                            ########</div>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">#####</div>
                                    </div>
                                    <div className="col-auto">
                                        {/* <i className="fas fa-comments fa-2x text-gray-300"></i> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  <!-- Content Row --> */}

                <div className="row">

                    {/*   <!-- Area Chart --> */}
                    <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                            {/*  <!-- Card Header - Dropdown --> */}
                            <div
                                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">



                                <BarChart />
                            </div>
                            {/*  <!-- Card Body --> */}
                            <div className="card-body">
                                <div className="chart-area">
                                    <canvas id="myAreaChart"></canvas>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  <!-- Pie Chart --> */}
                    <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                            {/*  <!-- Card Header - Dropdown --> */}



                            {/*  <!-- Card Body --> */}
                            <div className="card-body">

                                <DoughnutChart />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RegistralDashboardComponent;