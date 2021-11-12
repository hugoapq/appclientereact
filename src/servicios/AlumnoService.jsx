import axios from "axios"

export class AlumnoService{
    
    obtenerAlumnos(){

        return axios.get("http://localhost:8080/alumno/listar")
        .then(
            respuesta=>respuesta.data
            /*res=>{
                console.log(res)
            }*/
            
        )
    }

}