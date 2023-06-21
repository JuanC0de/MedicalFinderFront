import Global from "@/Global";
// import axios from "axios";
class ServicePatient {
  async insertarPaciente(idPaciente,cedulaPac,NombreCompletoPac,telefonoPac,correoPac,FechaNacimientoPac) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarPaciente");
    const raw = JSON.stringify({
      "idPaciente": idPaciente,
      "cedulaPac": cedulaPac,
      "NombreCompletoPac": NombreCompletoPac,
      "telefonoPac": telefonoPac,
      "correoPac": correoPac,
      "FechaNacimientoPac": FechaNacimientoPac
    });

    console.log("raw",raw)
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
    let request = "paciente/apipac/Paciente/";
    let url = Global.API_URL + request;

    try {
      const response = await fetch(url,requestOptions);
      console.log("Esta es la respuesta",response);
      return response
      
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
}
export default new ServicePatient();
