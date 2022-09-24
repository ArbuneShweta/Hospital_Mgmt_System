import axios from "axios";

class WardboyHttpService{
    constructor() {
        this.url = "https://localhost:7170/wardboy";
    }

    async getData(){
        let response = await axios.get(this.url)
        return response;
    }

    async postData(wardboy) {
        let response = await axios.post(this.url, wardboy, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async putData(id,wardboy){
        let response =  await axios.put(`${this.url}/${id}`, wardboy, {
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

export default WardboyHttpService;