import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { AdminJugadoresComponent } from './components/miembros/admin-jugadores/admin-jugadores.component';
import { AgregarJugadorComponent } from './components/miembros/admin-jugadores/agregar-jugador/agregar-jugador.component';
import { VisualizarJugadoresComponent } from './components/miembros/admin-jugadores/visualizar-jugadores/visualizar-jugadores.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiembrosComponent,
    AdminJugadoresComponent,
    AgregarJugadorComponent,
    VisualizarJugadoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
