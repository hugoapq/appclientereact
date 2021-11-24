import React, {Component} from "react"
import { AlumnoService } from "../servicios/AlumnoService"

import { Panel } from 'primereact/panel';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Menubar} from 'primereact/menubar';
import { Dialog } from 'primereact/dialog';

import 'primereact/resources/themes/lara-light-indigo/theme.css'    //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'    

export class Alumno extends Component{
    constructor(){
        super()
        this.state={}
        this.setState({
            alumnos:[]
        })

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
    }

    componentDidMount(){
        this.alumnoService.obtenerAlumnos().then(
            /*data => {
                console.log(data);
            }*/
            data =>this.setState({alumnos:data})
        )

        this.setState({
            visible:false
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
                    onHide={() => this.setState({visible:false})}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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