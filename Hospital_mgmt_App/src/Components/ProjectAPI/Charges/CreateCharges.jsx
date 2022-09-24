import React, { useState, useEffect } from "react";
import InputComponent from "../InputComponent";
import ChargesHttpService from "./ChargesHttpService";
import DataGridChargesComponent from './DatagridChargescomponent';
export const CreateCharges = (props) => {
  const serv = new ChargesHttpService();
  const [bool, setBool] = useState(false);
  const [employees, setEmps] = useState([]);
  const [emp, setEmp] = useState({
  
    charges_Id: 0,
    room_Charges: 0,
    nurse_Charges: 0,
    doctor_Charges: 0,
    medicine_Charges: 0,
    laundary_Charges: 0,
    canteen_Charges: 0
});
  const [patientData, setPatientData] = useState({
 
    room_Charges: 0,
    nurse_Charges: 0,
    doctor_Charges: 0,
    medicine_Charges: 0,
    laundary_Charges: 0,
    canteen_Charges: 0
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
      <h3>Charges</h3>
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
      <DataGridChargesComponent emp={emp} employees={employees} deleteData={deleteData} putData={putData} ></DataGridChargesComponent>
      <br/>
      {bool && <InputComponent
        patientData={patientData}
        setPatientData={setPatientData}
        postData={postData}
        
      ></InputComponent>}
    </div>
  );
};
