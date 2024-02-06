import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { ServiceService } from '../../service/service.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent implements OnInit {

  //propiedad
  tareas:Tarea[]=[];

  //constructor
  constructor(private serviceService:ServiceService){}

  ngOnInit(): void {
    this.tareas = this.serviceService.getTareas();
  }
}
