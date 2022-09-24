import React, { useState, useEffect } from "react";
import InputComponent from "../InputComponent";
import DoctorHttpService from "./DoctorHttpService";
import DataGridDocComponent from './DatagridDoctorcomponent';
export const CreateDoctor = (props) => {
  const serv = new DoctorHttpService();
  const [bool, setBool] = useState(false);
  const [employees, setEmps] = useState([]);
  const [emp, setEmp] = useState({
    doctor_Id:0,
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: ""
});
  const [patientData, setPatientData] = useState({
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: ""
  });

  const [statusMessage, setStatusMessage] = useState("");
  const loadData = () => {
    serv
      .getData()
      .then((response) => {
        setEmps(response.data);
        setStatusMessage("Data is received succsessfully");
      })
      .catch((error) => {
        setStatusMessage(error);
      });
  };
  const postData = (e) => {
    serv
      .postData(e)
      .then((response) => {
        setEmps([...employees, response.data]);
        setStatusMessage("IPD_Patient Data is posted succsessfully");
      })
      .catch((error) => {
        setStatusMessage(error);
      });
      //loadData();
  };
  const putData = (id, shivansh) => {
    serv
      .putData(id, shivansh)
      .then((response) => {
        setEmps([...employees, response.data]);
        setStatusMessage("Data is updated succsessfully");
      })
      .catch((error) => {
        setStatusMessage(error);
      });
  };
  const deleteData = (id) => {
    serv
      .deleteData(id)
      .then((response) => {
        setStatusMessage("Data is deleted succsessfully");
      })
      .catch((error) => {
        setStatusMessage(error);
      });
  };
  const postFunc = () => {
    setBool(true);

  };

  return (
    <div>
        <hr/>
      <h3>Doctor</h3>
      <table className="table table-bordered table-striped table-danger">
        <tbody>
          <tr>
            <td>
              <button className="btn btn-primary" onClick={loadData}>
                Get
              </button>
            </td>
            <td>
              <button className="btn btn-success" onClick={postFunc}>
                Post
              </button>
            </td>
            {/* <td>
              <button className="btn btn-warning" onClick={putData}>
                Put
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={deleteData}>
                Delete
              </button>
            </td> */}
          </tr>
        </tbody>
      </table>
      <br />
      <strong>{statusMessage}</strong>
      <br />
      <DataGridDocComponent emp={emp} employees={employees} deleteData={deleteData} putData={putData} ></DataGridDocComponent>
      <br/>
      {bool && <InputComponent
        patientData={patientData}
        setPatientData={setPatientData}
        postData={postData}
        
      ></InputComponent>}
    </div>
  );
};
