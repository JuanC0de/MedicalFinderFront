import Global from "@/Global";
// import axios from "axios";
class ServiceHome {
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
  async consultarPacientes() {
    let request = "paciente/apipac/Paciente/";
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
}
export default new ServiceHome();
