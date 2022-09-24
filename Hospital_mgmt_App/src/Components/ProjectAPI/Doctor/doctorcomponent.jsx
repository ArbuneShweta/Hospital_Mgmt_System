import React from "react";
import DoctorHttpService from "./doctorhttpservice";
import { useState, useEffect } from "react";

const DoctorComponent = (props) => {
  const [doctor, setDoctor] = useState({ doctorID: 0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', specialisation: '', doctorType: '', gender: '' });
  const [doctors, setDoctors] = useState([]);
  const [selectedID, setSelectedID] = useState(0);
  const serv = new DoctorHttpService();

  const styleobjbtn = {
    fontSize: 18
    
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    serv.getData()
      .then((response) => {
        setDoctors(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (doctor) => {
    serv.postData(doctor)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const putData = (doctor) => {
    serv.putData(doctor.doctorID, doctor)
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
    setSelectedID(entity.doctorID);
    setDoctor(entity);
  };

  const deleteEntity = (doctor) => {
    deleteData(doctor.doctorID);
  };

  const clear = () => {
    setDoctor({ doctorID: 0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', specialisation: '', doctorType: '', gender: '' });
    setSelectedID(0);
  };
  const save = () => {
    console.log(selectedID, doctor.doctorID);
    if (selectedID && selectedID == doctor.doctorID) {
      putData(doctor);
    }
    else {
      postData(doctor);
    }
    clear();
  };

  return (
    <div className="container">
      <h1>Doctor Form</h1>
      <div className="form-group">
        <label>Doctor ID</label>
        <input type="number" className="form-control"
          value={doctor.doctorID}
          onChange={(evt) => setDoctor({ ...doctor, doctorID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Doctor Name</label>
        <input type="text" className="form-control"
          value={doctor.firstName}
          onChange={(evt) => setDoctor({ ...doctor, firstName: evt.target.value })} />
        <input type="text" className="form-control"
          value={doctor.middleName}
          onChange={(evt) => setDoctor({ ...doctor, middleName: evt.target.value })} />
        <input type="text" className="form-control"
          value={doctor.lastName}
          onChange={(evt) => setDoctor({ ...doctor, lastName: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input type="string" className="form-control"
          value={doctor.mobile}
          onChange={(evt) => setDoctor({ ...doctor, mobile: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>email</label>
        <input type="string" className="form-control"
          value={doctor.email}
          onChange={(evt) => setDoctor({ ...doctor, email: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Specialization</label>
        <input type="string" className="form-control"
          value={doctor.specialisation}
          onChange={(evt) => setDoctor({ ...doctor, specialisation: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Doctor type</label>
        <input type="string" className="form-control"
          value={doctor.doctorType}
          onChange={(evt) => setDoctor({ ...doctor, doctorType: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input type="string" className="form-control"
          value={doctor.gender}
          onChange={(evt) => setDoctor({ ...doctor, gender: evt.target.value })} />
      </div>
      <div className="form-group">
        <button className="btn btn-warning m-1"
          onClick={clear} style={styleobjbtn}>Clear</button>
        <button className="btn btn-success"
          onClick={save} style={styleobjbtn}>Save</button>
      </div>

      <hr />
      <br />
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {
              Object.keys(doctor).map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {
            doctors.map((entity, index) => (
              <tr key={index}>
                {Object.keys(entity).map((header, index) => (
                  <td key={index}>{entity[header]}</td>
                ))}
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

export default DoctorComponent;