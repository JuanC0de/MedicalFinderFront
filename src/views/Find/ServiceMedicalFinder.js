import Global from "@/Global";
// import axios from "axios";
class ServiceMedicalFinder{
  async consultarListaEspecialidades() {
    let request = "especialidad/apiespecialidad/Especialidad/";
    let url = Global.API_URL + request;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("Esta es la data", data);
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  async consultarListaCiudades() {
    let request = "ciudades/apiciu/Ciudad/";
    let url = Global.API_URL + request;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("Esta es la data", data);
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }
  async consultarEspecialistas() {
    let request = "medico/apiMedico/MedicoM/";
    let url = Global.API_URL + request;
    try {
      const response = await fetch(url);
      const data = await response.json();

      console.log("Esta es la data de los medicos", data);
      return data;
    } catch (error) {
      console.log('Error:', error);
    }
  }
}
export default new ServiceMedicalFinder();
