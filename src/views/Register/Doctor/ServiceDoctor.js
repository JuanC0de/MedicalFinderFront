import Global from "@/Global";
// import axios from "axios";
class ServiceDoctor {
  async insertarMedico(NombreCompletoMed, NumeroTarjetaMed, CedulaMed, CorreoMed, TelefonoMed, CiudadMed, Especialidad, DireccionConsultorio, horaInicio, horaFinal, state) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarMedico");
    const raw = JSON.stringify({
      "NombreCompletoMed": NombreCompletoMed,
      "NumeroTarjetaMed": NumeroTarjetaMed,
      "CedulaMed": CedulaMed, 
      "CorreoMed": CorreoMed,
      "TelefonoMed": TelefonoMed,
      "CiudadMed" : CiudadMed,
      "Especialidad": Especialidad,
      "DireccionConsultorio" : DireccionConsultorio,
      "HoraInicio" : horaInicio,
      "HoraFinal" : horaFinal,
      "Activo": state
    });

    console.log("raw",raw)
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
    let request = "medico/apiMedico/MedicoM/";
    let url = Global.API_URL + request;

    try {
      const response = await fetch(url,requestOptions);
      console.log("Esta es la respuesta - Médico",response);
      return response;
      
    } catch (error) {
      console.log('Error:', error);
    }
  }

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

}
export default new ServiceDoctor();