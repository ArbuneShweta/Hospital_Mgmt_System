import React,{useState} from "react";
import  EditDoctor  from "./EditDoctor";
const DataGridDoctorComponent = (props) => {
  const [bool, setBool] = useState(false);
  const [pbool, setpBool] = useState(false);
  const [editedPatientData, setEditedPatientData] = useState({
    name: "",
    fees: 0,
    specialization: "",
    emp_Type: ""
    
  });
  const [passId, setPassId] = useState(0);

  const funcBool = (e) => {
    setBool(true);
    setPassId(e.doctor_Id);
    setEditedPatientData(e);
  };
  const funcPostBool = () => {
    setpBool(true);
    //setEditedPatientData(e);
  };
  return (
    <div>
    <table className="table table-bordered  table-info">
      <thead>
        <tr>
          {Object.keys(props.emp).map((header, index) => (
            <td key={index}><strong>{header}</strong></td>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.employees.map((e, index) => (
          <tr key={index}>
            {Object.keys(props.emp).map((header, index) => (
              <td key={index}>{String(e[header])}</td>
            ))}
             &nbsp;
              <button
                className="btn btn-primary btn-danger"
                onClick={() => props.deleteData(e.doctor_Id)}
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
      <EditDoctor
        editedPatientDataFunc={(e) => setEditedPatientData(e)}
        passId={passId}
        putData={props.putData}
        editedPatientDataa={editedPatientData}
      ></EditDoctor>
    )}
    </div>
  );
};

export default DataGridDoctorComponent;
