import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { AdminJugadoresComponent } from './components/miembros/admin-jugadores/admin-jugadores.component';
import { AgregarJugadorComponent } from './components/miembros/admin-jugadores/agregar-jugador/agregar-jugador.component';
import { VisualizarJugadoresComponent } from './components/miembros/admin-jugadores/visualizar-jugadores/visualizar-jugadores.component';
import { EliminarJugadorComponent } from './components/miembros/admin-jugadores/eliminar-jugador/eliminar-jugador.component';
import { AdminMasajistasComponent } from './components/miembros/admin-masajistas/admin-masajistas.component';
import { VisualizarMasajistasComponent } from './components/miembros/admin-masajistas/visualizar-masajistas/visualizar-masajistas.component';
import { AgregarMasajistaComponent } from './components/miembros/admin-masajistas/agregar-masajista/agregar-masajista.component';
import { EliminarMasajistaComponent } from './components/miembros/admin-masajistas/eliminar-masajista/eliminar-masajista.component';
import { AdminMedicosComponent } from './components/miembros/admin-medicos/admin-medicos.component';
import { VisualizarMedicosComponent } from './components/miembros/admin-medicos/visualizar-medicos/visualizar-medicos.component';
import { AgregarMedicoComponent } from './components/miembros/admin-medicos/agregar-medico/agregar-medico.component';
import { EliminarMedicoComponent } from './components/miembros/admin-medicos/eliminar-medico/eliminar-medico.component';
import { AdminNutriologosComponent } from './components/miembros/admin-nutriologos/admin-nutriologos.component';
import { VisualizarNutriologosComponent } from './components/miembros/admin-nutriologos/visualizar-nutriologos/visualizar-nutriologos.component';
import { AgregarNutriologoComponent } from './components/miembros/admin-nutriologos/agregar-nutriologo/agregar-nutriologo.component';
import { EliminarNutriologoComponent } from './components/miembros/admin-nutriologos/eliminar-nutriologo/eliminar-nutriologo.component';
import { LoginComponent } from './components/login/login.component';
import { PatridosComponent } from './components/patridos/patridos.component';
import { AgregarPartidoComponent } from './components/patridos/agregar-partido/agregar-partido.component';
import { EliminarPartidoComponent } from './components/patridos/eliminar-partido/eliminar-partido.component';
import { VisualizarPartidosComponent } from './components/patridos/visualizar-partidos/visualizar-partidos.component';
import { SolicitudesBoletosComponent } from './components/solicitudes-boletos/solicitudes-boletos.component';
import { AtenderSolicitudComponent } from './components/solicitudes-boletos/atender-solicitud/atender-solicitud.component';
import { VisualizarSolicitudComponent } from './components/solicitudes-boletos/visualizar-solicitud/visualizar-solicitud.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AgregarUsuarioComponent } from './components/usuarios/agregar-usuario/agregar-usuario.component';
import { VisualizarUsuariosComponent } from './components/usuarios/visualizar-usuarios/visualizar-usuarios.component';
import { EliminarUsuarioComponent } from './components/usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'miembros', component: MiembrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'miembros/admin-jugadores', component: AdminJugadoresComponent },
  { path: 'miembros/admin-jugadores/visualizar-jugador', component: VisualizarJugadoresComponent },
  { path: 'miembros/admin-jugadores/agregar-jugador', component: AgregarJugadorComponent },
  { path: 'miembros/admin-jugadores/eliminar-jugador', component: EliminarJugadorComponent },
  { path: 'miembros/admin-masajistas', component: AdminMasajistasComponent },
  { path: 'miembros/admin-masajistas/visualizar-masajista', component: VisualizarMasajistasComponent },
  { path: 'miembros/admin-masajistas/agregar-masajista', component: AgregarMasajistaComponent },
  { path: 'miembros/admin-masajistas/eliminar-masajista', component: EliminarMasajistaComponent },
  { path: 'miembros/admin-medicos', component: AdminMedicosComponent },
  { path: 'miembros/admin-medicos/visualizar-medico', component: VisualizarMedicosComponent },
  { path: 'miembros/admin-medicos/agregar-medico', component: AgregarMedicoComponent },
  { path: 'miembros/admin-medicos/eliminar-medico', component: EliminarMedicoComponent },
  { path: 'miembros/admin-nutriologos', component: AdminNutriologosComponent },
  { path: 'miembros/admin-nutriologos/visualizar-nutriologo', component: VisualizarNutriologosComponent },
  { path: 'miembros/admin-nutriologos/agregar-nutriologo', component: AgregarNutriologoComponent },
  { path: 'miembros/admin-nutriologos/eliminar-nutriologo', component: EliminarNutriologoComponent },
  { path: 'partidos', component: PatridosComponent },
  { path: 'partidos/agregar-partido', component: AgregarPartidoComponent },
  { path: 'partidos/eliminar-partido', component: EliminarPartidoComponent },
  { path: 'partidos/visualizar-partidos', component: VisualizarPartidosComponent },
  { path: 'solicitudes', component: SolicitudesBoletosComponent },
  { path: 'solicitudes/atender', component: AtenderSolicitudComponent },
  { path: 'solicitudes/visualizar', component: VisualizarSolicitudComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/agregar-usuario', component: AgregarUsuarioComponent },
  { path: 'usuarios/eliminar-usuario', component: EliminarUsuarioComponent },
  { path: 'usuarios/visualizar-usuarios', component: VisualizarUsuariosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
