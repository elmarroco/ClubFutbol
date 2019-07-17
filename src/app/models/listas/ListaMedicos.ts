import { Medico } from '../miembros/Medico';

export class ListaMedico {
  private medicos: Medico[];
  constructor(medico: Medico) {
    this.medicos = [];
    this.medicos.push(medico);
  }
  public getListaMedico(): Medico[] {
    return this.medicos;
  }
  public setListaMedico(medicos: Medico[]) {
    this.medicos = medicos;
  }
  public agregarMedico(medico: Medico): void {
    this.medicos.push(medico);
  }
  public getMedico(idMedico: number): Medico {
    return this.medicos.find(medico => {
      return medico.getID() === idMedico;
    });
  }
  public eliminarMedico(idMedico: number): void {
    this.medicos = this.medicos.filter(medico => {
      return (medico.getID() !== idMedico);
    });
  }

  public getNumeroDeMedicos(): number {
    return this.medicos.length;
  }
}
