import { Partido } from '../Partido';

export class ListaPartidos {
  partidos: Partido[];
  constructor(partido: Partido) {
    this.partidos = [];
    this.partidos.push(partido);
  }
  public agregarPartido(partido: Partido): void {
    this.partidos.push(partido);
  }
  public getPartido(idPartido: number): Partido {
    return this.partidos.find(partido => {
      return partido.idPartido === idPartido;
    });
  }
  public eliminarPartido(idPartido: number): void {
    this.partidos = this.partidos.filter(partido => {
      return (partido.idPartido !== idPartido);
    });
  }
  public getNumeroDePartidos(): number {
    return this.partidos.length;
  }
}
