import axios from 'axios';

class ReportsHttpService {
    constructor() {
        this.url = "https://localhost:7031/api/reports";
    }

   
    async postData(monthObj) {
        let response = await axios.post(`${this.url}/CCollectonpermonth`, monthObj, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    async postListDocSpecData(Doc) {
        let response = await axios.post(`${this.url}/ListDoctorspecialization`, Doc, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async postListDocEmptypeData(Doc) {
        let response = await axios.post(`${this.url}/ListDoctorEmptype`, Doc, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    async postListPatperDocData(Doc) {
        let response = await axios.post(`${this.url}/ListPatientperDoctor`, Doc, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }


}

export default ReportsHttpService;