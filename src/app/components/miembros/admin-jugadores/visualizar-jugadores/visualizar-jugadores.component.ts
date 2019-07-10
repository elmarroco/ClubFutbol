import { Component, OnInit } from '@angular/core';
import { ListaJugador } from 'src/app/models/listas/ListaJugadores';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-visualizar-jugadores',
  templateUrl: './visualizar-jugadores.component.html',
  styleUrls: ['./visualizar-jugadores.component.css']
})
export class VisualizarJugadoresComponent implements OnInit {
  listaJugadores: ListaJugador;
  constructor(miembrosService: MiembrosService) {
    this.listaJugadores = miembrosService.getListaJugadores();
   }

  ngOnInit() {
  }

}
