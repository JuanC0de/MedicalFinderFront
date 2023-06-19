import Global from "@/Global";
// import axios from "axios";
class ServiceSupport {
  async insertarDatosSoporte(Nombre, Apellido, Correo, Mensaje) {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    console.log("Entre al insertarDatosSoporte");
    const raw = JSON.stringify({
      "Nombre" : Nombre,
      "Apellido" :  Apellido,
      "Correo" : Correo,
      "Mensaje" : Mensaje
    });

    console.log("raw",raw)
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
    
    let request = "soporte/apisop/Soporte/";
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
export default new ServiceSupport();