import React, { useState, useEffect } from "react";
import { CreateIPDPatient } from "./CreateIPDpatient";
export const CreatePatient = (props) => {
  const [bool, setBool] = useState(false);
  const [patientData, setPatientData] = useState({
    first_Name: "",
    middle_Name: "",
    last_Name: "",
    mobile_No: "",
    email: "",
    gender: "",
    age_Type: "",
    totalFee: 0,
    doctor_Id: 0,
    isAdmitted: 0,
    address: {
      house_No: 0,
      society: "a",
      area: "a",
      city: "a",
      state: "a",
      dob: "2006-02-18T00:00:00",
    },
  });
  // console.log(patientData);
  useEffect(() => {
    if (patientData.isAdmitted == 1) {
      setBool(true);
    }
  }, [patientData.isAdmitted]);

  const passPatientData = () => {
    // props.editedPatientDataFunc(patientData);
    props.postData(patientData);
  };

  return (
    <div>
      <h3>CreatePatient</h3>
      <strong>
        <label>Firstname: </label>
      </strong>
      &nbsp;
      <input
        placeholder="first_name"
        onChange={(e) =>
          setPatientData({ ...patientData, first_Name: e.target.value })
        }
      ></input>
      <br />
      <strong>
        <label>Middlename: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, middle_Name: e.target.value })
        }
        placeholder="middle_name"
      ></input>
      <br />
      <strong>
        <label>Lastname: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, last_Name: e.target.value })
        }
        placeholder="last_name"
      ></input>
      <br />
      <strong>
        <label>Mobile No: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, mobile_No: e.target.value })
        }
        placeholder="mobile No"
      ></input>
      <br />
      <strong>
        <label>Email: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, email: e.target.value })
        }
        placeholder="email"
      ></input>
      <br />
      <strong>
        <label>Gender: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, gender: e.target.value })
        }
        placeholder="gender"
      ></input>
      <br />
      <strong>
        <label>Age Type: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, age_Type: e.target.value })
        }
        placeholder="age type"
      ></input>
      <br />
      <strong>
        <label>Total Fee: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, totalFee: e.target.value })
        }
        placeholder="total fee"
      ></input>
      <br />
      <strong>
        <label>Doctor Id: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, doctor_Id: e.target.value })
        }
        placeholder="doctor Id"
      ></input>
      <br />
      <strong>
        <label>Admit Patient?: </label>
      </strong>
      &nbsp;
      <input
        onChange={(e) =>
          setPatientData({ ...patientData, isAdmitted: e.target.value })
        }
        placeholder="is Admitted"
      ></input> <br/> <br/>
      <button onClick={passPatientData} className="btn btn-primary btn-warning">
        Add Patient
      </button>
      {bool && <CreateIPDPatient></CreateIPDPatient>}
    </div>
  );
};
