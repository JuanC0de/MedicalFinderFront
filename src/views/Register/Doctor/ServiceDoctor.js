import Global from "@/Global";
// import axios from "axios";
class ServiceDoctor {
  async insertarMedico(cedulaMed, NombreCompletoMed, telefonoMed, correoMed, NumeroTarjetaMed, ciudadMed) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarMedico");
    const raw = JSON.stringify({
      "cedulaMed": cedulaMed,
      "NombreCompletoMed": NombreCompletoMed,
      "telefonoMed": telefonoMed,
      "correoMed": correoMed,
      "NumeroTarjetaMed": NumeroTarjetaMed,
      "ciudadMed" : ciudadMed
    });

    console.log("raw",raw)
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
    let request = "models/apiModels/Medico/";
    let url = Global.API_URL + request;

    try {
      const response = await fetch(url,requestOptions);
      console.log("Esta es la respuesta - Médico",response);
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
export default new ServiceDoctor();