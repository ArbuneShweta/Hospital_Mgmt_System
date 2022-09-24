import logo from './logo.svg';
import './App.css';
import UseEffectAjaxPatientComponent from './Components/ProjectAPI/UseEffectAjaxPatientComponent';
import { CreateDoctor } from './Components/ProjectAPI/Doctor/CreateDoctor';
import {CreateCharges} from './Components/ProjectAPI/Charges/CreateCharges';
import ReportComponent from './Components/ProjectAPI/Reports/ReportComponent';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DoctorHttpService from './Components/ProjectAPI/Doctor/DoctorHttpService';
import PatientComponent from './Components/ProjectAPI/patient/patientcomponent';
import RoomComponent from './Components/ProjectAPI/room/roomcomponent';
function App() {
  return (
    <div className="App">
     <PatientComponent/>
     <RoomComponent/>
      <ReportComponent></ReportComponent>
      <UseEffectAjaxPatientComponent/>
      <CreateDoctor/>
     
    </div>
  );
}

export default App;
