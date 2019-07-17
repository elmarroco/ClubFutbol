import { Injectable } from '@angular/core';
import { ListaSolicitudesBoletos } from '../models/listas/ListaSolicitudesBoletos';
import { SolicitudBoleto } from '../models/SolicitudBoleto';
import { MiembrosService } from './miembros.service';
import { PartidosService } from './partidos.service';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesBoletosService {
  listaSolicitudes: ListaSolicitudesBoletos;

  constructor(
    private miembrosService: MiembrosService,
    private partidosService: PartidosService
  ) {
    this.listaSolicitudes = new ListaSolicitudesBoletos(
      new SolicitudBoleto(
        this.miembrosService.getListaJugadores().getJugador(1).getNombre(),
        1,
        this.partidosService.listaPartidos.getPartido(1).idPartido,
        4
      )
    );
    this.listaSolicitudes.solicitudesBoletos.push(new SolicitudBoleto(
      this.miembrosService.getListaJugadores().getJugador(2).getNombre(),
      2,
      this.partidosService.listaPartidos.getPartido(2).idPartido,
      2
    ));
  }
}
