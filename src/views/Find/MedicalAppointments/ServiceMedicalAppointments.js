import Global from "@/Global";

class ServiceMedicalAppointments {
    async insertarCita(fecha, motivo,hora, Tipodeconsulta, IdEspecialista, IdMedico) {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        console.log("Entre al insertarCita");
        const raw = JSON.stringify({
          "fecha": fecha,
          "motivo": motivo,
          "hora": hora,
          "Tipodeconsulta": Tipodeconsulta,
          "IdEspecialista": IdEspecialista,
          "IdMedico": IdMedico
        });
    
        console.log("raw",raw)
        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        
        let request = "agendar/apiagendar/Agendar/";
        let url = Global.API_URL + request;
    
        try {
          const response = await fetch(url,requestOptions);
          console.log("Esta es la respuesta - Cita",response);
          return response
          
        } catch (error) {
          console.log('Error:', error);
        }
      }
}

export default new ServiceMedicalAppointments();