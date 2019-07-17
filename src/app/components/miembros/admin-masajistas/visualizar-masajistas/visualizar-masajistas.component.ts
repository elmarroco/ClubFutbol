import { Component, OnInit } from '@angular/core';
import { ListaMasajista } from 'src/app/models/listas/ListaMasajistas';
import { MiembrosService } from 'src/app/services/miembros.service';

@Component({
  selector: 'app-visualizar-masajistas',
  templateUrl: './visualizar-masajistas.component.html',
  styleUrls: ['./visualizar-masajistas.component.css']
})
export class VisualizarMasajistasComponent implements OnInit {
  listaMasajistas: ListaMasajista;

  constructor(miembrosService: MiembrosService) {
    this.listaMasajistas = miembrosService.getListaMasajistas();
  }

  ngOnInit() {
  }

}
