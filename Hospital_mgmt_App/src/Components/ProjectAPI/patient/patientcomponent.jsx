import React from "react";
import PatientHttpService from "./patienthttpservice";
import { useState, useEffect } from "react";

const PatientComponent = (props) => {
  const [patient, setPatient] = useState({ patientID: 0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', dob:'', gender: '' });
  const [patients, setPatients] = useState([]);
  const [selectedID, setSelectedID] = useState(0);

  const serv = new PatientHttpService();

  const styleobjbtn = {
    fontSize: 18
    
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    serv.getData()
      .then((response) => {
        setPatients(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (patient) => {
    serv.postData(patient)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const putData = (patient) => {
    serv.putData(patient.patientID, patient)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const deleteData = (id) => {

    serv.deleteData(id)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  const onEntitySelect = (entity) => {
    setSelectedID(entity.patientID);
    setPatient(entity);
  };

  const deleteEntity = (patient) => {
    deleteData(patient.patientID);
  };

  const clear = () => {
    setPatient({ patientID: 0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', dob:'', gender: '' });
    setSelectedID(0);
  };
  const save = () => {
    if (selectedID && selectedID == patient.patientID) {
      putData(patient);
    }
    else {
      postData(patient);
    }
    clear();
  };

  return (
    <div className="container">
      <h1>Patient Form</h1>
      <div className="form-group">
        <label>Patient ID</label>
        <input type="number" className="form-control"
          value={patient.patientID}
          onChange={(evt) => setPatient({ ...patient, patientID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Patient Name</label>
        <input type="text" className="form-control"
          value={patient.firstName}
          onChange={(evt) => setPatient({ ...patient, firstName: evt.target.value })} />
        <input type="text" className="form-control"
          value={patient.middleName}
          onChange={(evt) => setPatient({ ...patient, middleName: evt.target.value })} />
        <input type="text" className="form-control"
          value={patient.lastName}
          onChange={(evt) => setPatient({ ...patient, lastName: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input type="string" className="form-control"
          value={patient.mobile}
          onChange={(evt) => setPatient({ ...patient, mobile: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>email</label>
        <input type="string" className="form-control"
          value={patient.email}
          onChange={(evt) => setPatient({ ...patient, email: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>DOB</label>
        <input type="string" className="form-control"
          value={patient.patientType}
          onChange={(evt) => setPatient({ ...patient, dob: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input type="string" className="form-control"
          value={patient.gender}
          onChange={(evt) => setPatient({ ...patient, gender: evt.target.value })} />
      </div>
      <div className="form-group ">
        <button className="btn btn-warning m-1 btn-lg font-weight-bolder"
          onClick={clear} style={styleobjbtn}>Clear</button>
        <button className="btn btn-success btn-lg "
          onClick={save} style={styleobjbtn}>Save</button>
      </div>

      <hr />
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {
              Object.keys(patient).map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {
            patients.map((entity, index) => (
              <tr key={index}>
                {Object.keys(entity).map((header, index) => (
                  <td key={index}>{entity[header]}</td>
                ))}
                {/* <td onClick={() => onEntitySelect(entity)}>Select</td>
                <td onClick={() => deleteEntity(entity)}>Delete</td> */}

                <td onClick={() => onEntitySelect(entity)}>  <button className="btn btn-outline-primary btn-lg"> Select </button>  </td>
                <td onClick={() => deleteEntity(entity)}><button className="btn btn-outline-danger btn-lg"> Delete </button></td>
              
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>

  );

}

export default PatientComponent;