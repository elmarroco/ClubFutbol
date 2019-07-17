export class SolicitudBoleto {
  nombreSolicitante: string;
  idSolicitud: number;
  idPatrido: number;
  cantidad: number;
  status: 'pendiente' | 'aprobada' | ' rechazada';
  constructor(nombreSolicitante: string, idSolicitud: number, idPartido: number, cantidad: number) {
    this.nombreSolicitante = nombreSolicitante;
    this.idSolicitud = idSolicitud;
    this.idPatrido = idPartido;
    this.cantidad = cantidad;
    this.status = 'pendiente';
  }
}
