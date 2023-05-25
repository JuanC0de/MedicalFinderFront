import Global from "@/Global";
// import axios from "axios";
class ServiceHome {
  async insertarMedico(idPaciente,cedulaPac,NombreCompletoPac,telefonoPac,correoPac,direccionPac,FechaNacimientoPac,ciudadPac) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarMedico");
    const raw = JSON.stringify({
      "idPaciente": idPaciente,
      "cedulaPac": cedulaPac,
      "NombreCompletoPac": NombreCompletoPac,
      "telefonoPac": telefonoPac,
      "correoPac": correoPac,
      "direccionPac": direccionPac,
      "FechaNacimientoPac": FechaNacimientoPac,
      "ciudadPac": ciudadPac
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
}
export default new ServiceHome();