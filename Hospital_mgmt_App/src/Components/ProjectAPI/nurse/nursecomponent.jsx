import React from "react";
import NurseHttpService from "./nursehttpservice";
import { useState, useEffect } from "react";

const NurseComponent = (props) => {
  const [nurse, setNurse] = useState({ nurseID: 0, wardID: 0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', gender: '' });
  const [nurses, setNurses] = useState([]);
  const [selectedID, setSelectedID] = useState(0);
  const serv = new NurseHttpService();



  useEffect(() => {
    loadData();
  }, []);

  const styleobjbtn = {
    fontSize: 18
    
  }


  const loadData = () => {
    serv.getData()
      .then((response) => {
        setNurses(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (nurse) => {
    serv.postData(nurse)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const putData = (nurse) => {
    serv.putData(nurse.nurseID, nurse)
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
    setSelectedID(entity.nurseID);
    setNurse(entity);
  };

  const deleteEntity = (nurse) => {
    deleteData(nurse.nurseID);
  };

  const clear = () => {
    setNurse({ nurseID: 0, wardID: 0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', gender: '' });
    setSelectedID(0);
  };
  const save = () => {
    console.log(selectedID, nurse.nurseID);
    if (selectedID && selectedID == nurse.nurseID) {
      putData(nurse);
    }
    else {
      postData(nurse);
    }
    clear();
  };

  return (
    <div className="container">
      <h3>Nurse Form</h3>
      <div className="form-group">
        <label>Nurse ID</label>
        <input type="number" className="form-control"
          value={nurse.nurseID}
          onChange={(evt) => setNurse({ ...nurse, nurseID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Nurse Name</label>
        <input type="text" className="form-control"
          value={nurse.firstName}
          onChange={(evt) => setNurse({ ...nurse, firstName: evt.target.value })} />
        <input type="text" className="form-control"
          value={nurse.middleName}
          onChange={(evt) => setNurse({ ...nurse, middleName: evt.target.value })} />
        <input type="text" className="form-control"
          value={nurse.lastName}
          onChange={(evt) => setNurse({ ...nurse, lastName: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input type="string" className="form-control"
          value={nurse.mobile}
          onChange={(evt) => setNurse({ ...nurse, mobile: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>email</label>
        <input type="string" className="form-control"
          value={nurse.email}
          onChange={(evt) => setNurse({ ...nurse, email: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Gender</label>
        <input type="string" className="form-control"
          value={nurse.gender}
          onChange={(evt) => setNurse({ ...nurse, gender: evt.target.value })} />
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
              Object.keys(nurse).map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {
            nurses.map((entity, index) => (
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

export default NurseComponent;