import axios from "axios";

class NurseHttpService{
    constructor() {
        this.url = "https://localhost:7170/nurse";
    }

    async getData(){
        let response = await axios.get(this.url)
        return response;
    }

    async postData(nurse) {
        let response = await axios.post(this.url, nurse, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putData(id,nurse){
        let response =  await axios.put(`${this.url}/${id}`, nurse, {
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

export default NurseHttpService;