import { Component, OnInit } from '@angular/core';
import { ListaSolicitudesBoletos } from 'src/app/models/listas/ListaSolicitudesBoletos';
import { SolicitudesBoletosService } from 'src/app/services/solicitudes-boletos.service';
import { PartidosService } from 'src/app/services/partidos.service';
import { ListaPartidos } from 'src/app/models/listas/ListaPartidos';

@Component({
  selector: 'app-visualizar-solicitud',
  templateUrl: './visualizar-solicitud.component.html',
  styleUrls: ['./visualizar-solicitud.component.css']
})
export class VisualizarSolicitudComponent implements OnInit {
  listaSolicitudes: ListaSolicitudesBoletos;
  listaPartidos: ListaPartidos;

  constructor(private solicitudBoletosService: SolicitudesBoletosService, private partidosService: PartidosService) {
    this.listaSolicitudes = this.solicitudBoletosService.listaSolicitudes;
    this.listaPartidos = this.partidosService.listaPartidos;
   }

  ngOnInit() {
  }

}
