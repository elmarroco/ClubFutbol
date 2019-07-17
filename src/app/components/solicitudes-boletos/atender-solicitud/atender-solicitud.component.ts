import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ListaSolicitudesBoletos } from 'src/app/models/listas/ListaSolicitudesBoletos';
import { SolicitudesBoletosService } from 'src/app/services/solicitudes-boletos.service';

@Component({
  selector: 'app-atender-solicitud',
  templateUrl: './atender-solicitud.component.html',
  styleUrls: ['./atender-solicitud.component.css']
})
export class AtenderSolicitudComponent implements OnInit {
  listaSolicitudes: ListaSolicitudesBoletos;

  constructor(private router: Router, private route: ActivatedRoute, private solicitudesService: SolicitudesBoletosService) {
    this.listaSolicitudes = this.solicitudesService.listaSolicitudes;
   }

  ngOnInit() {
  }

  onSubmit(form) {
    const idSolicitud = parseInt(form.value.solicitud, 10);
    this.listaSolicitudes.getSolicitud(idSolicitud).status = form.value.respuesta;
    this.solicitudesService.listaSolicitudes = this.listaSolicitudes;
    this.router.navigate([`../`], { relativeTo: this.route });
  }
}
