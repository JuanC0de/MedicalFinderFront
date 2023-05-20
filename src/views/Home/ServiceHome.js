import Global from "@/Global";
// import axios from "axios";
class ServiceHome {
  async consultarListaEspecialidades() {
    // let request = "especialidad/apiespecialidad/Especialidad/";
    // let url = Global.API_URL + request;
    // try {
    //   const response = await axios.get(url,{
    //     headers: {
    //       Accept: "application/json",
    //       ContentType: "application/json"
    //     }
    //   });
    //   return response.data;
    // } catch (error) {
    //   throw new Error('Error en la petición: ' + error.message);
    // }
    try {
      let request = "especialidad/apiespecialidad/Especialidad/";
      let url = Global.API_URL + request;
      const response = await fetch(url);
      const result = await response.text();

      console.log("Este es el result",result);
      return result;
    } catch (error) {
      console.log('error', error);
    }

  }
}
  export default new ServiceHome();
