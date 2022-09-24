import axios from "axios";

class WardHttpService{
    constructor() {
        this.url = "https://localhost:7170/ward";
    }

    async getData(){
        console.log("get wards");
        let response = await axios.get(this.url)
        return response;
    }

    async postData(entity) {
        console.log("post ward");
        let response = await axios.post(this.url, entity, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putData(id,entity){
        console.log("put ward");
        let response =  await axios.put(`${this.url}/${id}`, entity, {
            headers: {
               'Content-Type':'application/json'
            }   
       });
       return response;
    }

    async deleteData(id){
        console.log("delete ward");
        let response = await axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default WardHttpService;