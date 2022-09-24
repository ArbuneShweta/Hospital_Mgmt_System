import React from "react";
import WardHttpService from "./wardhttpservice";
import { useState, useEffect } from "react";

const WardComponent = (props) => {
  const [ward, setWard] = useState({ wardID: 0, wardName: ''});
  const [wards, setWards] = useState([]);
  const [selectedID, setSelectedID] = useState(0);

  const serv = new WardHttpService();

  const styleobjbtn = {
    fontSize: 18
    
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    serv.getData()
      .then((response) => {
        setWards(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (ward) => {
    serv.postData(ward)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const putData = (ward) => {
    serv.putData(ward.wardID, ward)
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
    setSelectedID(entity.wardID);
    setWard(entity);
  };

  const deleteEntity = (ward) => {
    deleteData(ward.wardID);
  };

  const clear = () => {
    setWard({ wardID: 0, wardName: ''});
    setSelectedID(0);
  };
  const save = () => {
    if (selectedID && selectedID == ward.wardID) {
      putData(ward);
    }
    else {
      postData(ward);
    }
    clear();
  };

  return (
    <div className="container">
      <h3>Ward Form</h3>
      <div className="form-group">
        <label>Ward ID</label>
        <input type="number" className="form-control"
          value={ward.wardID}
          onChange={(evt) => setWard({ ...ward, wardID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Ward Name</label>
        <input type="string" className="form-control"
          value={ward.wardName}
          onChange={(evt) => setWard({ ...ward, wardName: evt.target.value })} />
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
              Object.keys(ward).map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {
            wards.map((entity, index) => (
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

export default WardComponent;