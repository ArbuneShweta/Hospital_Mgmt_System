import axios from 'axios';

class IPD_PatientHttpService {
    constructor() {
        this.url = "https://localhost:7031/api/IPD_Patient";
    }

    async getData() {
        let response = await axios.get(`${this.url}/Get`);
        return response;
    }
    // async getDataById(id) {
    //     let response = await axios.get(`${this.url}/${id}`);
    //     return response;
    // }
    async postData(emp) {
        let response = await axios.post(`${this.url}/Create`, emp, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async putData(id, emp) {
        let response = await axios.put(`${this.url}/Edit/${id}`, emp, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async deleteData(id) {
        let response = await axios.delete(`${this.url}/Delete/${id}`);
        return response;
    }
    // async searchData(str) {
    //     let response = await axios.get(`${this.url}/Search/${str}`);
    //     return response;
    // }

}

export default IPD_PatientHttpService;