import React, { useState } from "react";
import EditCharges from "./EditCharges";
const DataGridChargesComponent = (props) => {
  const [bool, setBool] = useState(false);
  // const [pbool, setpBool] = useState(false);
  const [editedPatientData, setEditedPatientData] = useState({
    room_Charges: 0,
    nurse_Charges: 0,
    doctor_Charges: 0,
    medicine_Charges: 0,
    laundary_Charges: 0,
    canteen_Charges: 0,
  });
  const [passId, setPassId] = useState(0);

  const funcBool = (e) => {
    setBool(true);
    setPassId(e.charges_Id);
    setEditedPatientData(e);
  };

  return (
    <div>
      <table className="table table-bordered table-info">
        <thead>
          <tr>
            {Object.keys(props.emp).map((header, index) => (
              <td key={index}>
                <strong>{header}</strong>
              </td>
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
                onClick={() => props.deleteData(e.charges_Id)}
              >
                <strong className="text-dark">Delete Row</strong>
              </button>
              <button
                onClick={() => funcBool(e)}
                className="btn btn-primary btn-success"
              >
                <strong className="text-dark">Edit</strong>
              </button>
            </tr>
          ))}
        </tbody>
      </table>
      {bool && (
        <EditCharges
          editedPatientDataFunc={(e) => setEditedPatientData(e)}
          passId={passId}
          putData={props.putData}
          editedPatientDataa={editedPatientData}
        ></EditCharges>
      )}
    </div>
  );
};

export default DataGridChargesComponent;
