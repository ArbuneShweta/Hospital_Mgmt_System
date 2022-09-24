import React, { useState, useEffect } from "react";
import DataGridComponent from "./Datagridcomponent";
import InputComponent from "./InputComponent";
import IPD_PatientHttpService from "./IPD_PatientHttpService";
export const CreateIPDPatient = () => {
  const serv = new IPD_PatientHttpService();
  const [bool, setBool] = useState(false);
  const [employees, setEmps] = useState([]);
  const [emp, setEmp] = useState({
    charges_Id: 0,
    nurse: 0,
    admit_Date: "2006-02-18T00:00:00",
    discharge_Date: "2006-02-18T00:00:00",
    room: "",
    medical_Store_Access: 0,
    canteen_Access: 0,
    no_of_Days: 0,
    no_of_Visits: 0,
    total_Amount: 0
});

  const [patientData, setPatientData] = useState({
    charges_Id: 0,
    nurse: 0,
    admit_Date: "2006-02-18T00:00:00",
    discharge_Date: "2006-02-18T00:00:00",
    room: "",
    medical_Store_Access: 0,
    canteen_Access: 0,
    no_of_Days: 0,
    no_of_Visits: 0,
    total_Amount: 0
  });
  const [statusMessage, setStatusMessage] = useState("");
  const loadData = () => {
    serv
      .getData()
      .then((response) => {
        // Read the response
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
  const passPatientData = () => {
    postData(patientData);
  };
  const postFunc = () => {
    setBool(true);
  };


  return (
    <div>
      <br/>
      <h3>CreateIPDPatient</h3>
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
            <td>
              <button className="btn btn-warning" onClick={putData}>
                Put
              </button>
            </td>
            <td>
              <button className="btn btn-danger" onClick={deleteData}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <strong>{statusMessage}</strong>
      <br />
    <DataGridComponent emp={emp} employees={employees} ></DataGridComponent>
      <br/>
      {bool && 
        <InputComponent
          patientData={patientData}
          setPatientData={setPatientData}
          postData={postData}
        ></InputComponent>
      }
      {/* {JSON.stringify(employees)} */}
    </div>
  );
};
