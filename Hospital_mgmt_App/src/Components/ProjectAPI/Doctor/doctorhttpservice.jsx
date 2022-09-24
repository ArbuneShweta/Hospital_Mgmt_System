import axios from "axios";

class DoctorHttpService{
    constructor() {
        this.url = "https://localhost:7170/doctor";
    }

    async getData(){
        let response = await axios.get(this.url)
        return response;
    }

    async postData(doctor) {
        let response = await axios.post(this.url, doctor, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putData(id,doctor){
        let response =  await axios.put(`${this.url}/${id}`, doctor, {
            headers: {
               'Content-Type':'application/json'
            }   
       });
       return response;
    }

    async deleteData(id){
        let response = await axios.delete(`${this.url}/${id}`);
        return response;
    }
}

export default DoctorHttpService;