import { Component, OnInit } from '@angular/core';
import { ListaPartidos } from 'src/app/models/listas/ListaPartidos';
import { PartidosService } from 'src/app/services/partidos.service';

@Component({
  selector: 'app-visualizar-partidos',
  templateUrl: './visualizar-partidos.component.html',
  styleUrls: ['./visualizar-partidos.component.css']
})
export class VisualizarPartidosComponent implements OnInit {
  listaPartidos: ListaPartidos;

  constructor(private partidosService: PartidosService) {
    this.listaPartidos = partidosService.listaPartidos;
  }

  ngOnInit() {
  }

}
