export class Partido {
  idPartido: number;
  rival: string;
  cancha: string;
  fecha: Date;
  constructor(idPartido: number, rival: string, cancha: string, fecha: Date) {
    this.idPartido = idPartido;
    this.rival = rival;
    this.cancha = cancha;
    this.fecha = fecha;
  }
}
