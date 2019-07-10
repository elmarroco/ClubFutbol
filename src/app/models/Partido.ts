export class Partido {
  private rival: string;
  private cancha: string;
  private fecha: Date;
  constructor(rival: string, cancha: string, fecha: Date) {
    this.rival = rival;
    this.cancha = cancha;
    this.fecha = fecha;
  }
  getRival(): string {
    return this.rival;
  }
  getCancha(): string {
    return this.cancha;
  }
  getFecha(): Date {
    return this.fecha;
  }
}
