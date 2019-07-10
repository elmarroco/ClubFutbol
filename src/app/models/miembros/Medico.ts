import { Miembro } from './Miembro';

export class Medico extends Miembro {
  cedulaProfesional: string;
  constructor(id: number, edad: number, nombre: string, cedulaProfesional: string) {
    super(id, edad, nombre);
    this.cedulaProfesional = cedulaProfesional;
  }
  getCedula(): string {
    return this.cedulaProfesional;
  }
}
