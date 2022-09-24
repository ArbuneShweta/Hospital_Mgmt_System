import React, { useState } from "react";
import ReportsHttpService from "./ReportsHttpService";
const ReportComponent = () => {
  const [res, setRes] = useState(0);
  const [resDoc, setResDoc] = useState([]);
  const [resDocEmptype, setResDocEmptype] = useState([]);
  const [resPatperDoc, setResPatperDoc] = useState([]);
  const [bool, setBool] = useState(false);
  const [objMonth, setObjMonth] = useState({
    id: 0,
    monthname: "",
  });
  const [objDoc, setObjDoc] = useState({
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: "",
  });
  const [objDocEmptype, setObjDocEmptype] = useState({
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: "",
  });
  const [objDocPatperDoc, setObjDocPatperDoc] = useState({
    doctor_Id: 0,
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: "",
  });
  const [statusDocMessage, setStatusDocMessage] = useState("");
  const [statusCollMessage, setStatusCollMessage] = useState("");
  const [statusEmptypeMessage, setStatusEmptypeMessage] = useState("");
  const [statusPatperDocMessage, setStatusPatperDocMessage] = useState("");
  const serv = new ReportsHttpService();

  const postData = (e) => {
    serv
      .postData(e)
      .then((response) => {
        //  setEmps([...employees, response.data]);
        setRes(response.data);
        setStatusCollMessage("Collection Data is retrieved succsessfully");
      })
      .catch((error) => {
        setStatusCollMessage(error);
      });
    //loadData();
  };

  const postListDocSpecData = (e) => {
    serv
      .postListDocSpecData(e)
      .then((response) => {
        //  setEmps([...employees, response.data]);
        setResDoc(response.data);
        setStatusDocMessage(
          "Doctors by specialization are retrieved succsessfully"
        );
      })
      .catch((error) => {
        setStatusDocMessage(error);
      });
    //loadData();
  };

  const postListDocEmptypeData = (e) => {
    serv
      .postListDocEmptypeData(e)
      .then((response) => {
        //  setEmps([...employees, response.data]);
        setResDocEmptype(response.data);
        setStatusEmptypeMessage(
          "Doctors by employee type are retrieved succsessfully"
        );
      })
      .catch((error) => {
        setStatusEmptypeMessage(error);
      });
    //loadData();
  };

  const postListPatperDocData = (e) => {
    setBool(true);
    serv
      .postListPatperDocData(e)
      .then((response) => {
        setResPatperDoc(response.data);
        setStatusPatperDocMessage(
          "Patients under this Doctor are retrieved succsessfully"
        );
      })
      .catch((error) => {
        setStatusPatperDocMessage(error);
      });
    //loadData();
  };
  return (
    <div className=" container ">
      <hr />
      <h3>Reports</h3>

      <input
        placeholder="Enter Month no:"
        type="number"
        onChange={(e) => setObjMonth({ id: e.target.value, monthname: "" })}
      ></input>
      <br />
      <br />
      <button className="btn btn-primary" onClick={() => postData(objMonth)}>
        Submit
      </button>
      <p>Collection per month</p>
      <h2>{res}</h2>
      <strong>{statusCollMessage}</strong>
      <hr />
      {/* ...............................................Specialization..................... */}
      <input
        placeholder="Enter Specialization"
        onChange={(e) =>
          setObjDoc({ ...objDoc, specialization: e.target.value })
        }
      ></input>
      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => postListDocSpecData(objDoc)}
      >
        Submit
      </button>
      <p>Doctors by Specialization</p>
      <table className="table table-bordered table-striped table-info">
        <tbody>
          {" "}
          {resDoc.map((e, index) => (
            <tr key={index}>
              {Object.keys(objDoc).map((header, index) => (
                <td key={index}>{String(e[header])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <strong>{statusDocMessage}</strong>
      <hr />
      {/* ...............................................EMP type..................... */}
      <input
        placeholder="Enter Employee Type"
        onChange={(e) =>
          setObjDocEmptype({ ...objDocEmptype, emp_Type: e.target.value })
        }
      ></input>
      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => postListDocEmptypeData(objDocEmptype)}
      >
        Submit
      </button>
      <p>Doctors by Employee Type</p>
      <table className="table table-bordered table-striped table-info">
        <tbody>
          {resDocEmptype.map((e, index) => (
            <tr key={index}>
              {Object.keys(objDocEmptype).map((header, index) => (
                <td key={index}>{String(e[header])}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <strong>{statusEmptypeMessage}</strong>
      <hr />
      {/* ...............................................Patient Per Doc..................... */}
      <input
        placeholder="Enter Doctor Id"
        onChange={(e) =>
          setObjDocPatperDoc({ ...objDocPatperDoc, doctor_Id: e.target.value })
        }
      ></input>
      <br />
      <br />
      <button
        className="btn btn-primary"
        onClick={() => postListPatperDocData(objDocPatperDoc)}
      >
        Submit
      </button>
      <p>Patients under this Doctor</p>
      {bool && (
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
            {resPatperDoc.map((e, index) => (
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
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <strong>{statusPatperDocMessage}</strong>
    </div>
  );
};

export default ReportComponent;
