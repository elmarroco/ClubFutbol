export class Cita {
  private fecha: Date;
  private lugar: string;
  private nombreServidor: string;
  private nombrePaciente: string;
  private idServidor: number;
  private idPaciente: number;
  constructor(fecha: Date, lugar: string, nombreServidor: string, nombrePaciente: string, idServidor: number, idPaciente: number) {
    this.fecha = fecha;
    this.lugar = lugar;
    this. nombreServidor = nombreServidor;
    this.nombrePaciente = nombrePaciente;
    this.idServidor = idServidor;
    this.idPaciente = idPaciente;
  }
  getFecha(): Date {
    return this.fecha;
  }
  getLugar(): string {
    return this.lugar;
  }
  getNombreServidor(): string {
    return this.nombreServidor;
  }
  getNombrePaciente(): string {
    return this.nombrePaciente;
  }
  getIdServidor(): number {
    return this.idServidor;
  }
  getIdPaciente(): number {
    return this.idPaciente;
  }
}
