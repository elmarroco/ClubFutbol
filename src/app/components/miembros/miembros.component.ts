import { Component, OnInit } from '@angular/core';
import { Jugador } from 'src/app/models/miembros/Jugador';
import { ListaJugador } from 'src/app/models/listas/ListaJugadores';

@Component({
  selector: 'app-miembros',
  templateUrl: './miembros.component.html',
  styleUrls: ['./miembros.component.css']
})
export class MiembrosComponent implements OnInit {
  listaJugador: ListaJugador;
  constructor() {
    const listaJugador = new ListaJugador(new Jugador(1, 23, 'Jose Masri', 10, 70, 178, 'Delantero'));
    listaJugador.agregarJugador(new Jugador(2, 19, 'Javi Garcia', 4, 65, 170, 'Defensa'));
    this.listaJugador = listaJugador;
  }
  ngOnInit() {

  }
}
