import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MiembrosComponent } from './components/miembros/miembros.component';
import { AdminJugadoresComponent } from './components/miembros/admin-jugadores/admin-jugadores.component';
import { AgregarJugadorComponent } from './components/miembros/admin-jugadores/agregar-jugador/agregar-jugador.component';
import { VisualizarJugadoresComponent } from './components/miembros/admin-jugadores/visualizar-jugadores/visualizar-jugadores.component';
import { EliminarJugadorComponent } from './components/miembros/admin-jugadores/eliminar-jugador/eliminar-jugador.component';
import { AdminMedicosComponent } from './components/miembros/admin-medicos/admin-medicos.component';
import { AdminNutriologosComponent } from './components/miembros/admin-nutriologos/admin-nutriologos.component';
import { AdminMasajistasComponent } from './components/miembros/admin-masajistas/admin-masajistas.component';
import { AgregarMedicoComponent } from './components/miembros/admin-medicos/agregar-medico/agregar-medico.component';
import { EliminarMedicoComponent } from './components/miembros/admin-medicos/eliminar-medico/eliminar-medico.component';
import { VisualizarMedicosComponent } from './components/miembros/admin-medicos/visualizar-medicos/visualizar-medicos.component';
import { AgregarMasajistaComponent } from './components/miembros/admin-masajistas/agregar-masajista/agregar-masajista.component';
import { EliminarMasajistaComponent } from './components/miembros/admin-masajistas/eliminar-masajista/eliminar-masajista.component';
import { VisualizarMasajistasComponent } from './components/miembros/admin-masajistas/visualizar-masajistas/visualizar-masajistas.component';
import { AgregarNutriologoComponent } from './components/miembros/admin-nutriologos/agregar-nutriologo/agregar-nutriologo.component';
import { EliminarNutriologoComponent } from './components/miembros/admin-nutriologos/eliminar-nutriologo/eliminar-nutriologo.component';
import { VisualizarNutriologosComponent } from './components/miembros/admin-nutriologos/visualizar-nutriologos/visualizar-nutriologos.component';
import { LoginComponent } from './components/login/login.component';
import { PatridosComponent } from './components/patridos/patridos.component';
import { AgregarPartidoComponent } from './components/patridos/agregar-partido/agregar-partido.component';
import { EliminarPartidoComponent } from './components/patridos/eliminar-partido/eliminar-partido.component';
import { VisualizarPartidosComponent } from './components/patridos/visualizar-partidos/visualizar-partidos.component';
import { SolicitudesBoletosComponent } from './components/solicitudes-boletos/solicitudes-boletos.component';
import { VisualizarSolicitudComponent } from './components/solicitudes-boletos/visualizar-solicitud/visualizar-solicitud.component';
import { AtenderSolicitudComponent } from './components/solicitudes-boletos/atender-solicitud/atender-solicitud.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AgregarUsuarioComponent } from './components/usuarios/agregar-usuario/agregar-usuario.component';
import { EliminarUsuarioComponent } from './components/usuarios/eliminar-usuario/eliminar-usuario.component';
import { VisualizarUsuariosComponent } from './components/usuarios/visualizar-usuarios/visualizar-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiembrosComponent,
    AdminJugadoresComponent,
    AgregarJugadorComponent,
    VisualizarJugadoresComponent,
    EliminarJugadorComponent,
    AdminMedicosComponent,
    AdminNutriologosComponent,
    AdminMasajistasComponent,
    AgregarMedicoComponent,
    EliminarMedicoComponent,
    VisualizarMedicosComponent,
    AgregarMasajistaComponent,
    EliminarMasajistaComponent,
    VisualizarMasajistasComponent,
    AgregarNutriologoComponent,
    EliminarNutriologoComponent,
    VisualizarNutriologosComponent,
    LoginComponent,
    PatridosComponent,
    AgregarPartidoComponent,
    EliminarPartidoComponent,
    VisualizarPartidosComponent,
    SolicitudesBoletosComponent,
    VisualizarSolicitudComponent,
    AtenderSolicitudComponent,
    UsuariosComponent,
    AgregarUsuarioComponent,
    EliminarUsuarioComponent,
    VisualizarUsuariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
