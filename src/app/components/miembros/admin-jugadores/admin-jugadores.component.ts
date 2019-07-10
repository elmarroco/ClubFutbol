import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';
import { ListaJugador } from 'src/app/models/listas/ListaJugadores';

@Component({
  selector: 'app-admin-jugadores',
  templateUrl: './admin-jugadores.component.html',
  styleUrls: ['./admin-jugadores.component.css']
})
export class AdminJugadoresComponent implements OnInit {
  listaJugadores: ListaJugador;

  constructor(miembrosService: MiembrosService) {
    this.listaJugadores = miembrosService.getListaJugadores();
   }

  ngOnInit() {
  }
}
