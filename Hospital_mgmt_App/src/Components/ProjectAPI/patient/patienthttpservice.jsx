import axios from "axios";

class PatientHttpService{
    constructor() {
        this.url = "https://localhost:7170/patient";
    }

    async getData(){
        console.log("get patients");
        let response = await axios.get(this.url)
        return response;
    }

    async postData(entity) {
        console.log("post patient");
        let response = await axios.post(this.url, entity, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putData(id,entity){
        console.log("put patient");
        let response =  await axios.put(`${this.url}/${id}`, entity, {
            headers: {
               'Content-Type':'application/json'
            }   
       });
       return response;
    }

    async deleteData(id){
        console.log("delete patient");
        let response = await axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default PatientHttpService;