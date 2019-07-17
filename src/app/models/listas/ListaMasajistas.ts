import { Masajista } from '../miembros/Masajista';

export class ListaMasajista {
  private masajistas: Masajista[];
  constructor(masajista: Masajista) {
    this.masajistas = [];
    this.masajistas.push(masajista);
  }
  public getListaMasajista(): Masajista[] {
    return this.masajistas;
  }
  public setListaMasajista(masajistas: Masajista[]) {
    this.masajistas = masajistas;
  }
  public agregarMasajista(masajista: Masajista): void {
    this.masajistas.push(masajista);
  }
  public getMasajista(idMasajista: number): Masajista {
    return this.masajistas.find(masajista => {
      return masajista.getID() === idMasajista;
    });
  }
  public eliminarMasajista(idMasajista: number): void {
    this.masajistas = this.masajistas.filter(masajista => {
      return (masajista.getID() !== idMasajista);
    });
  }

  public getNumeroDeMasajistas(): number {
    return this.masajistas.length;
  }
}
