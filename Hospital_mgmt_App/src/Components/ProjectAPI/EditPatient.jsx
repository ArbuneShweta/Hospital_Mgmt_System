import React, { useState, useEffect } from "react";
export const EditPatient = (props) => {
  const [patientData, setPatientData] = useState({
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
      <h3>EditPatient</h3>
      <strong> <label >Firstname: </label></strong> &nbsp;
      <input
        value={patientData.first_Name}
        onChange={(e) =>
          setPatientData({ ...patientData, first_Name: e.target.value })
        }
      ></input> <br/>
      <strong><label >Middlename: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, middle_Name: e.target.value })
        }
        value={patientData.middle_Name}
      ></input><br/>
      <strong> <label >Lastname: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, last_Name: e.target.value })
        }
        value={patientData.last_Name}
      ></input><br/>
      <strong> <label >Mobile No: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, mobile_No: e.target.value })
        }
        value={patientData.mobile_No}
      ></input><br/>
      <strong><label >Email: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, email: e.target.value })
        }
        value={patientData.email}
      ></input><br/>
      <strong> <label >Gender: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, gender: e.target.value })
        }
        value={patientData.gender}
      ></input><br/>
      <strong> <label >Age Ttpe: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, age_Type: e.target.value })
        }
        value={patientData.age_Type}
      ></input><br/>
      <strong> <label >Total Fee: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, totalFee: e.target.value })
        }
        value={patientData.totalFee}
      ></input><br/>
     <strong> <label >Doctor Id: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, doctor_Id: e.target.value })
        }
        value={patientData.doctor_Id}
      ></input><br/>
     <strong> <label >Is Admitted?: </label></strong>&nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, isAdmitted: e.target.value })
        }
        value={patientData.isAdmitted}
      ></input><br/>
  <br/>
      <button
        onClick={passEditPatientData}
        className="btn btn-primary btn-success"
      >
       Change
      </button>
    
    </div>
  );
};
