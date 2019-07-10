export class Entrenamiento {
  fecha: Date;
  lugar: string;
  constructor(fecha: Date, lugar: string) {
    this.fecha = fecha;
    this.lugar = lugar;
  }
  getFecha(): Date {
    return this.fecha;
  }
  getLugar(): string {
    return this.lugar;
  }
}
