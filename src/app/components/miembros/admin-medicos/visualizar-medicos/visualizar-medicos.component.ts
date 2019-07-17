import { Component, OnInit } from '@angular/core';
import { ListaMedico } from 'src/app/models/listas/ListaMedicos';
import { MiembrosService } from 'src/app/services/miembros.service';


@Component({
  selector: 'app-visualizar-medicos',
  templateUrl: './visualizar-medicos.component.html',
  styleUrls: ['./visualizar-medicos.component.css']
})
export class VisualizarMedicosComponent implements OnInit {
  listaMedicos: ListaMedico;

  constructor(miembrosService: MiembrosService) {
    this.listaMedicos = miembrosService.getListaMedicos();
  }

  ngOnInit() {
  }

}
