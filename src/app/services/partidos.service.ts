import { Injectable } from '@angular/core';
import { ListaPartidos } from '../models/listas/ListaPartidos';
import { Partido } from '../models/Partido';

@Injectable({
  providedIn: 'root'
})
export class PartidosService {
  listaPartidos: ListaPartidos;

  constructor() {
    this.listaPartidos = new ListaPartidos(new Partido(1, 'Cuervos FC', 'Bentito Villamarín', new Date(2019, 11, 17)));
    this.listaPartidos.agregarPartido(new Partido(2, 'Tarantulas FC', 'Jorge Dorantes', new Date(2019, 11, 28)));
    this.listaPartidos.agregarPartido(new Partido(3, 'FC Barcelona', 'Camp Nou', new Date(2019, 12, 15)));
  }
}
