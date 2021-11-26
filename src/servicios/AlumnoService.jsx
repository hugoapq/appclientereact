import axios from "axios"

export class AlumnoService{
    
    obtenerAlumnos(){

        return axios.get("http://localhost:8080/alumno/listar")
        .then(
            respuesta=>respuesta.data //funcion de flecha JavaScript
            /*res=>{
                console.log(res)
            }*/          
            
        )
    }

    guardarAlumno(alumno){
        return axios.post("http://localhost:8080/alumno/guardar",alumno).then(
            respuesta=>respuesta.data
        )

    }

}