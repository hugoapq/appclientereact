import React, {Component} from "react"
import { AlumnoService } from "../servicios/AlumnoService"

export class Alumno extends Component{
    constructor(){
        super()
        this.state={}
        this.setState({
            alumnos:[]
        })

        this.alumnoService = new AlumnoService()
    }

    componentDidMount(){
        this.alumnoService.obtenerAlumnos().then(
            data => {
                console.log(data);
            }
        )
    }

    render(){
        return (
            <h3>Listado de Alumnos</h3>
        )
    }

    
}