import React from "react";
import RoomHttpService from "./roomhttpservice";
import { useState, useEffect } from "react";

const RoomComponent = (props) => {
  const [room, setRoom] = useState({ roomID: 0, wardID: '', roomType:'', roomStatus:'', roomCharge:''});
  const [rooms, setRooms] = useState([]);
  const [selectedID, setSelectedID] = useState(0);

  const serv = new RoomHttpService();

  const styleobjbtn = {
    fontSize: 18
    
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    serv.getData()
      .then((response) => {
        setRooms(response.data.records);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const postData = (room) => {
    serv.postData(room)
      .then((response) => {
        loadData();
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  };

  const putData = (room) => {
    serv.putData(room.roomID, room)
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
    setSelectedID(entity.roomID);
    setRoom(entity);
  };

  const deleteEntity = (room) => {
    deleteData(room.roomID);
  };

  const clear = () => {
    setRoom({ roomID: 0, wardID: '', roomType:'', roomStatus:'', roomCharge:''});
    setSelectedID(0);
  };
  const save = () => {
    if (selectedID && selectedID == room.roomID) {
      putData(room);
    }
    else {
      postData(room);
    }
    clear();
  };

  return (
    <div className="container">
      <h3>Room Form</h3>
      <div className="form-group">
        <label>Room ID</label>
        <input type="number" className="form-control"
          value={room.roomID}
          onChange={(evt) => setRoom({ ...room, roomID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Ward ID</label>
        <input type="number" className="form-control"
          value={room.wardID}
          onChange={(evt) => setRoom({ ...room, wardID: parseInt(evt.target.value) })} />
      </div>
      <div className="form-group">
        <label>Room Type</label>
        <input type="string" className="form-control"
          value={room.roomType}
          onChange={(evt) => setRoom({ ...room, roomType: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Room Status</label>
        <input type="string" className="form-control"
          value={room.roomStatus}
          onChange={(evt) => setRoom({ ...room, roomStatus: evt.target.value })} />
      </div>
      <div className="form-group">
        <label>Room Charge</label>
        <input type="number" className="form-control"
          value={room.roomCharge}
          onChange={(evt) => setRoom({ ...room, roomCharge: parseInt(evt.target.value) })} />
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
              Object.keys(room).map((header, index) => (
                <th key={index}>{header}</th>
              ))
            }
            <td>Options</td>
          </tr>
        </thead>
        <tbody>
          {
            rooms.map((entity, index) => (
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

export default RoomComponent;