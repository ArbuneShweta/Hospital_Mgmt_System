import axios from "axios";

class RoomHttpService{
    constructor() {
        this.url = "https://localhost:7170/room";
    }

    async getData(){
        console.log("get rooms");
        let response = await axios.get(this.url)
        return response;
    }

    async postData(entity) {
        console.log("post room");
        let response = await axios.post(this.url, entity, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putData(id,entity){
        console.log("put room");
        let response =  await axios.put(`${this.url}/${id}`, entity, {
            headers: {
               'Content-Type':'application/json'
            }   
       });
       return response;
    }

    async deleteData(id){
        console.log("delete room");
        let response = await axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default RoomHttpService;