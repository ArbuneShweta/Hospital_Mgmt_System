import React, { useState, useEffect } from "react";
const EditCharges = (props) => {
  const [patientData, setPatientData] = useState({
    room_Charges: 0,
    nurse_Charges: 0,
    doctor_Charges: 0,
    medicine_Charges: 0,
    laundary_Charges: 0,
    canteen_Charges: 0,
  });
  // console.log(patientData);
  useEffect(() => {
    setPatientData(props.editedPatientDataa);
  }, []);

  const passEditPatientData = () => {
    props.editedPatientDataFunc(patientData);
    props.putData(props.passId, patientData);
  };

  return (
    <div>
      <h3>EditCharges</h3>
   
      <strong><label>Room Charges:</label></strong> &nbsp;
      <input
        value={patientData.room_Charges}
        onChange={(e) =>
          setPatientData({ ...patientData, room_Charges: e.target.value })
        }
      ></input>
      <br/>
      <strong><label>Nurse_Charges:</label></strong> &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, nurse_Charges: e.target.value })
        }
        value={patientData.nurse_Charges}
      ></input>
      <br/>
      <strong><label>Doctor_Charges:</label></strong> &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, doctor_Charges: e.target.value })
        }
        value={patientData.doctor_Charges}
      ></input>
      <br/>
      <strong><label>medicine_Charges:</label></strong> &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, medicine_Charges: e.target.value })
        }
        value={patientData.medicine_Charges}
      ></input>
      <br/>
      <strong><label>Laundary_Charges:</label></strong> &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, laundary_Charges: e.target.value })
        }
        value={patientData.laundary_Charges}
      ></input>
      <br/>
      <strong><label>Canteen_Charges:</label></strong> &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, canteen_Charges: e.target.value })
        }
        value={patientData.canteen_Charges}
      ></input>
<br/> <br/>
      <button onClick={passEditPatientData} className="btn btn-primary btn-success"
      >
      Change</button>
    </div>
  );
};

export default EditCharges;
