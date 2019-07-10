import { Injectable } from '@angular/core';
import { ListaJugador } from '../models/listas/ListaJugadores';
import { Jugador } from '../models/miembros/Jugador';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  listaJugadores: ListaJugador;
  constructor() {
    this.listaJugadores = new ListaJugador(new Jugador(1, 22, 'Jose Masri', 10, 70, 180, 'delantero'));
    this.listaJugadores.agregarJugador(new Jugador(2, 20, 'Milton Ponce', 9, 70, 175, 'medio'));
  }
  getListaJugadores(): ListaJugador {
    return this.listaJugadores;
  }
}
