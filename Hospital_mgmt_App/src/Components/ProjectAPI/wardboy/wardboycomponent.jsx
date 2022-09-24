import React from "react";
import WardboyHttpService from "./wardboyhttpservice";
import { useState, useEffect } from "react";

const WardboyComponent = (props) => {
  const [wardboy, setwardboy] = useState({ wardboyID: 0, wardID:0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', gender: '' });
  const [wardboys, setwardboys] = useState([]);
  const [selectedID, setSelectedID] = useState(0);
  const serv = new WardboyHttpService();

  const styleobjbtn = {
    fontSize: 18
    
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    serv.getData()
      .then((response) => {
        setwardboy(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (wardboy) => {
    serv.postData(wardboy)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const putData = (wardboy) => {
    serv.putData(wardboy.wardboyID, wardboy)
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
    setSelectedID(entity.wardboyID);
    setwardboy(entity);
  };

  const deleteEntity = (wardboy) => {
    deleteData(wardboy.wardboyID);
  };

  const clear = () => {
    setwardboy({ wardboyID: 0, ward:0, firstName: '', middleName: '', lastName: '', mobile: '', email: '', gender: '' });
    setSelectedID(0);
  };
  const save = () => {
    console.log(selectedID, wardboy.wardboyID);
    if (selectedID && selectedID == wardboy.wardboyID) {
      putData(wardboy);
    }
    else {
      postData(wardboy);
    }
    clear();
  };

  return (
    <div className="container">
      <h1>Wardboy Form</h1>
      <div className="form-group">
        <label>wardboy ID</label>
        <input type="number" className="form-control"
          value={wardboy.wardboyID}
          onChange={(evt) => setwardboy({ ...wardboy, wardboyID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>ward ID</label>
        <input type="number" className="form-control"
          value={wardboy.wardID}
          onChange={(evt) => setwardboy({ ...wardboy, wardID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Wardboy Name</label>
        <input type="text" className="form-control"
          value={wardboy.firstName}
          onChange={(evt) => setwardboy({ ...wardboy, firstName: evt.target.value })} />
        <input type="text" className="form-control"
          value={wardboy.middleName}
          onChange={(evt) => setwardboy({ ...wardboy, middleName: evt.target.value })} />
        <input type="text" className="form-control"
          value={wardboy.lastName}
          onChange={(evt) => setwardboy({ ...wardboy, lastName: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Mobile</label>
        <input type="string" className="form-control"
          value={wardboy.mobile}
          onChange={(evt) => setwardboy({ ...wardboy, mobile: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>email</label>
        <input type="string" className="form-control"
          value={wardboy.email}
          onChange={(evt) => setwardboy({ ...wardboy, email: evt.target.value })} />
      </div>
    
      <div className="form-group">
        <label>Gender</label>
        <input type="string" className="form-control"
          value={wardboy.gender}
          onChange={(evt) => setwardboy({ ...wardboy, gender: evt.target.value })} />
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
              Object.keys(wardboy).map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {
            wardboys.map((entity, index) => (
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

export default WardboyComponent;