import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { tipoTarea } from '../../models/tipo_tarea';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-alta-tarea',
  templateUrl: './alta-tarea.component.html',
  styleUrl: './alta-tarea.component.css'
})
export class AltaTareaComponent implements OnInit{

    //propiedades
    tarea!:Tarea;
    tipos: tipoTarea[] = [];
  
    //constructor
    constructor(private serviceService:ServiceService){  }
  
    ngOnInit(): void {
      this.tarea = this.serviceService.nuevaTarea();
      this.tipos = this.serviceService.getTipos();
    }
  
  
    //método para insertar una tarea desde el formulario
    insertarTarea(){
      this.serviceService.agregarTarea(this.tarea);
      this.tarea = this.serviceService.nuevaTarea();
    }

}
