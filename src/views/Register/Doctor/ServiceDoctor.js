import Global from "@/Global";
// import axios from "axios";
class ServiceHome {
  async insertarMedico(cedulaMed, NombreCompletoMed, telefonoMed, correoMed, NumeroTarjetaMed) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarMedico");
    const raw = JSON.stringify({
      "cedulaMed": cedulaMed,
      "NombreCompletoMed": NombreCompletoMed,
      "telefonoMed": telefonoMed,
      "correoMed": correoMed,
      "NumeroTarjetaMed": NumeroTarjetaMed
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
}
export default new ServiceHome();