import React from "react";

const InputComponent = (props) => {
  const passPatientData = () => {
    // props.editedPatientDataFunc(patientData);
    props.postData(props.patientData);
    //props.loadData();
  };
  return (
    <div>
      {Object.keys(props.patientData).map((header, index) => (
        <>
          <strong>
            <label>{header}:</label>{" "}
          </strong>{" "}
          &nbsp;
          <input
          placeholder={header}
            key={index}
            onChange={(e) =>
              props.setPatientData({
                ...props.patientData,
                [header]: e.target.value,
              })
            }
          ></input>
          <br />
        </>
      ))}
      <br />
      <button onClick={passPatientData} className="btn btn-primary btn-warning">
        Add
      </button>
    </div>
  );
};

export default InputComponent;
