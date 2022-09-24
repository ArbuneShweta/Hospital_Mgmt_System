import { Button } from "bootstrap";
import React, { useState, useEffect, Fragment } from "react";
import { EditPatient } from "./EditPatient";
import PatientHttpService from "./PatientHttpService";
import { CreatePatient } from "./CreatePatient";
import { CreateDoctor } from "./Doctor/CreateDoctor";

const UseEffectAjaxPatientComponent = () => {
  const [employees, setEmps] = useState([]);
  const [emp, setEmp] = useState({
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Mobile_No: "",
    Email: "",
    Gender: "",
    Age_Type: "",
    TotalFee: 0,
    Doctor_Id: 0,
    IsAdmitted: 0,
    Address: {
      address_Id: 0,
      house_No: 0,
      society: "a",
      area: "a",
      city: "a",
      state: "a",
      dob: "2022-09-18 00:00:00.000",
    },
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [bool, setBool] = useState(false);
  const [pbool, setpBool] = useState(false);
  const [editedPatientData, setEditedPatientData] = useState({
    First_Name: "",
    Middle_Name: "",
    Last_Name: "",
    Mobile_No: "",
    Email: "",
    Gender: "",
    Age_Type: "",
    TotalFee: 0,
    Doctor_Id: 0,
    IsAdmitted: 0,
    Address: {
      address_Id: 0,
      house_No: 0,
      society: "a",
      area: "a",
      city: "a",
      state: "a",
      dob: "2022-09-18 00:00:00.000",
    },
  });
  const [passId, setPassId] = useState(0);
  // define an instance of the EmployeeHttpService

  const serv = new PatientHttpService();

  // use the 'useEffect()' to make the call
  // after the  component is in rendering and mounting process
  useEffect(() => {
    //loadData();
  }, []); // The dependency list Parameter that
  // will detect the state change in out case its 'employees'
  // THis will stop and execution of useEffect()

  const setF = (e) => {
    setEmp(e);
  };

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
        setStatusMessage("Data is posted succsessfully");
      })
      .catch((error) => {
        setStatusMessage(error);
      });
    //console.log('Post method click....');
  };
  const putData = (id, shivansh) => {
    // let e = {
    //   First_Name: "Harshad",
    //   Middle_Name: "kishore",
    //   Last_Name: "Reddy",
    //   Mobile_No: "2398429343",
    //   Email: "kumar@gmail.com",
    //   Gender: "male",
    //   Age_Type: "major",
    //   TotalFee: 50,
    //   Doctor_Id: 2,
    //   IsAdmitted: 0,
    // };
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

  // const searchhData = (str) => {
  //     if(str.length==0)
  //     {
  //         loadData();
  //         return;
  //     }
  //     serv.searchData(str)
  //         .then((response) => {
  //             setEmps(response.data);
  //             setStatusMessage("Data is received succsessfully");
  //         })
  //         .catch((error) => {
  //             setStatusMessage(error);
  //         });
  // };
  const funcBool = (e) => {
    setBool(true);
    setPassId(e.patient_Id);
    setEditedPatientData(e);
  };
  const funcPostBool = () => {
    setpBool(true);
    //setEditedPatientData(e);
  };
  return (
    <Fragment>
      <h2>Hospital App</h2>
      <h3>Patient</h3>
      {/* <input type="text" onChange={(e)=>searchhData(e.target.value)}></input> */}
      <table className="table table-bordered table-striped table-danger">
        <tbody>
          <tr>
            <td>
              <button className="btn btn-primary" onClick={loadData}>
                Get
              </button>
            </td>
            <td>
              <button
                className="btn btn-success"
                onClick={funcPostBool}
              >
                Post
              </button>
            </td>
            {/* <td>
              <button className="btn btn-warning" onClick={putData}>
                Put
              </button>
            </td> */}
            {/* <td>
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
      <table className="table table-bordered  table-info">
        <thead>
          <tr>
            <th>Patient Id</th>
            <th>Address Id</th>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age Type</th>
            <th>Total Fee</th>
            <th>Doctor Id</th>
            <th>IsAdmitted</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e, index) => (
            <tr key={index}>
              <td>{e.patient_Id}</td>
              <td>{e.address_Id}</td>
              <td>{e.first_Name}</td>
              <td>{e.middle_Name}</td>
              <td>{e.last_Name}</td>
              <td>{e.mobile_No}</td>
              <td>{e.email}</td>
              <td>{e.gender}</td>
              <td>{e.age_Type}</td>
              <td>{e.totalFee}</td>
              <td>{e.doctor_Id}</td>
              <td>{e.isAdmitted}</td>
              &nbsp;
              <button
                className="btn btn-primary btn-danger"
                onClick={() => deleteData(e.patient_Id)}
              >
                <strong className="text-dark">Delete Row</strong>
              </button>
              <button onClick={() => funcBool(e)}className="btn btn-primary btn-success"
              >
                <strong className="text-dark">Edit</strong></button>
            </tr>
          ))}
        </tbody>
      </table>
      {bool && (
        <EditPatient
          editedPatientDataFunc={(e) => setEditedPatientData(e)}
          passId={passId}
          putData={putData}
          editedPatientDataa={editedPatientData}
        ></EditPatient>
      )}
      <br/>
      {pbool && <CreatePatient postData={postData}></CreatePatient>}
    
      {/* {JSON.stringify(employees)} */}
 
    </Fragment>
  );
};

export default UseEffectAjaxPatientComponent;
