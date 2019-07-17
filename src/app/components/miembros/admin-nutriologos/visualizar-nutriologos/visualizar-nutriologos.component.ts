import { Component, OnInit } from '@angular/core';
import { ListaNutriologo } from 'src/app/models/listas/ListaNutriologos';
import { MiembrosService } from 'src/app/services/miembros.service';


@Component({
  selector: 'app-visualizar-nutriologos',
  templateUrl: './visualizar-nutriologos.component.html',
  styleUrls: ['./visualizar-nutriologos.component.css']
})
export class VisualizarNutriologosComponent implements OnInit {
  listaNutiologos: ListaNutriologo;

  constructor(miembrosService: MiembrosService) {
    this.listaNutiologos = miembrosService.getListaNutriologos();

  }

  ngOnInit() {
  }

}
