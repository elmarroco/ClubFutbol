import { Nutriologo } from '../miembros/Nutriologo';

export class ListaNutriologo {
  private nutriologos: Nutriologo[];
  constructor(nutriologo: Nutriologo) {
    this.nutriologos = [];
    this.nutriologos.push(nutriologo);
  }
  public getListaNutriologo(): Nutriologo[] {
    return this.nutriologos;
  }
  public setListaNutriologo(nutriologos: Nutriologo[]) {
    this.nutriologos = nutriologos;
  }
  public agregarNutriologo(nutriologo: Nutriologo): void {
    this.nutriologos.push(nutriologo);
  }
  public getNutriologo(idNutriologo: number): Nutriologo {
    return this.nutriologos.find(nutriologo => {
      return nutriologo.getID() === idNutriologo;
    });
  }
  public eliminarNutriologo(idNutriologo: number): void {
    this.nutriologos = this.nutriologos.filter(nutriologo => {
      return (nutriologo.getID() !== idNutriologo);
    });
  }

  public getNumeroDeNutriologos(): number {
    return this.nutriologos.length;
  }
}
