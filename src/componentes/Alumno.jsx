import React, {Component} from "react"
import { AlumnoService } from "../servicios/AlumnoService"

import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Menubar} from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import 'primereact/resources/themes/lara-light-indigo/theme.css'    //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'    

export class Alumno extends Component{

    constructor(){
        super()
        this.state={
            visible: false,
            alumno: {
                id: null,
                apPaterno: null,
                apMaterno: null,
                nombres: null
            }
        }
       
        this.elementosmenu=[
            {
                label: 'Nuevo',
                icon: 'pi pi-fw pi-plus',
                command:()=>{
                    //alert('Nuevo alumno')
                    this.mostrarNuevoDialog()
                }
            },
            {
                label: 'Editar',
                icon: 'pi pi-fw pi-pencil',
                command:()=>{
                    alert('Editar alumno')
                }
            },
            {
                label: 'Eliminar',
                icon: 'pi pi-fw pi-trash',
                command:()=>{
                    alert('Eliminando alumno')
                }
            },
        ]

        this.alumnoService = new AlumnoService()

        this.guardar = this.guardar.bind(this)
        this.footer=(
            <div>
                <Button label="Guardar" 
                    icon="pi pi-check"
                    onClick={this.guardar} />
            </div>
        )


    }

    componentDidMount(){
        this.alumnoService.obtenerAlumnos().then(
            /*data => {
                console.log(data);
            }*/
            data =>this.setState({alumnos:data})
        )       
    }

    guardar(){
        console.log("Guardando registro")

        this.alumnoService.guardarAlumno(this.state.alumno).then(data=>{
            console.log(data)
        })

    }

    render(){
        return (
            <div style={{width:'80%', margin: '0 auto', marginTop:'20px'}}>
                <Menubar model={this.elementosmenu}/>
                <Panel header="Listado de Alumnos">
                    <DataTable value={this.state.alumnos} responsiveLayout="scroll">
                        <Column field="id" header="ID"></Column>
                        <Column field="apPaterno" header="AP. PATERNO"></Column>
                        <Column field="apMaterno" header="AP. MATERNO"></Column>
                        <Column field="nombres" header="NOMBRES"></Column>
                    </DataTable>
                </Panel>

                <Dialog header="Crear alumno" visible={this.state.visible} 
                    style={{ width: '50vw' }} modal={true} 
                    footer={this.footer}
                    onHide={() => this.setState({visible:false})}>
                  
                    <span className="p-float-label">
                        <InputText id="paterno" value={this.state.alumno.apPaterno} 
                            style={{width:'100%'}}
                        onChange={(e) => {
                            console.log("paterno....")
                        let valor=e.target.value                       
                        this.setState(prevState=>{
                            let alumno= Object.assign({},prevState.alumno)
                            alumno.apPaterno= valor
                            return {alumno};
                        }
                        )
                        }} />
                        <label htmlFor="paterno">Ap. Paterno</label>
                    </span>
                    <br/>    
                    <span className="p-float-label">
                        <InputText id="materno" value={this.state.alumno.apMaterno} 
                            style={{width:'100%'}}
                        onChange={(e) => {
                        let valor=e.target.value                       
                        this.setState(prevState=>{
                            let alumno= Object.assign({},prevState.alumno)
                            alumno.apMaterno= valor
                            return {alumno};
                        }
                        )
                        }} />
                        <label htmlFor="materno">Ap. Materno</label>
                    </span>
                    <br/>    
                    <span className="p-float-label">
                        <InputText id="nombres" value={this.state.alumno.nombres} 
                            style={{width:'100%'}}
                        onChange={(e) => {
                        let valor=e.target.value                       
                        this.setState(prevState=>{
                            let alumno= Object.assign({},prevState.alumno)
                            alumno.nombres= valor
                            return {alumno};
                        }
                        )
                        }} />
                        <label htmlFor="nombres">Nombres</label>
                    </span>
     

                </Dialog>
            </div>
        )
    }

    mostrarNuevoDialog(){
        this.setState({
            visible:true
        })
    }
    
}