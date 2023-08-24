import { TextField } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Button,Modal,Input } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { updateComplainRequest } from "../redux/actions/complainAction";

const ComplainModal =({show,handleShow,handleClose,studentId, firstName,middleName,lastName,complain})=>{
    const [response,setResponse]=useState('')
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
      e.preventDefault();
      dispatch(updateComplainRequest(studentId,response));
      console.log(response);
    }


    return(
<div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Complain</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    student id: {studentId}
                </div>
                <div class="form-group mt-3">
                    First Name: {firstName}
                </div>
                <div class="form-group mt-3">
                    Middle Name: {middleName}
                </div>
                <div class="form-group mt-3">
                    Last Name: {lastName}
                </div>
                <div class="form-group mt-3">
                    Complain: {complain}
                </div>
                <div className="mb-3">
                      {/* <label>Complain</label> */}
                      {/* <input type="text" name="complain" className="form-control"
                      
                      onChange={(e) => setAge(e.target.value)}/> */}
                      <TextField sx={{maxWidth:400}} id="outlined-basic" label="Response" variant="outlined" onChange={(e) => setResponse(e.target.value)}/>
                  </div>

                  <button type="submit" onClick={handleSubmit} class="btn btn-success mt-4">Submit Response</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
    )
}
export default ComplainModal;
