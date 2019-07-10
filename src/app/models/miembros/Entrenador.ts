import { Miembro } from './Miembro';

export class Entrenador extends Miembro {
  constructor(id: number, edad: number, nombre: string) {
    super(id, edad, nombre);
  }
}
