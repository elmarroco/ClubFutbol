import { SolicitudBoleto } from '../SolicitudBoleto';

export class ListaSolicitudesBoletos {
  solicitudesBoletos: SolicitudBoleto[];
  constructor(solicitudBoleto: SolicitudBoleto) {
    this.solicitudesBoletos = [];
    this.solicitudesBoletos.push(solicitudBoleto);
  }
  public getSolicitud(idSolicitud: number): SolicitudBoleto {
    return this.solicitudesBoletos.find(solicitudBoleto => {
      return solicitudBoleto.idSolicitud === idSolicitud;
    });
  }
  public eliminarSolicitud(idSolicitud: number): void {
    this.solicitudesBoletos = this.solicitudesBoletos.filter(solicitudBoleto => {
      return (solicitudBoleto.idSolicitud !== idSolicitud);
    });
  }
}
