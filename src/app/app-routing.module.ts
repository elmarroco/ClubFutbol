import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { AdminJugadoresComponent } from './components/miembros/admin-jugadores/admin-jugadores.component';
import { AgregarJugadorComponent } from './components/miembros/admin-jugadores/agregar-jugador/agregar-jugador.component';
import { VisualizarJugadoresComponent } from './components/miembros/admin-jugadores/visualizar-jugadores/visualizar-jugadores.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'miembros/admin-jugadores', component: AdminJugadoresComponent },
  { path: 'miembros/admin-jugadores/visualizar-jugador', component: VisualizarJugadoresComponent },
  { path: 'miembros/admin-jugadores/agregar-jugador', component: AgregarJugadorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
