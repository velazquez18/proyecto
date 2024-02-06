import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AltaTareaComponent } from './pages/alta-tarea/alta-tarea.component';
import { ListaTareasComponent } from './pages/lista-tareas/lista-tareas.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaTareaComponent,
    ListaTareasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
