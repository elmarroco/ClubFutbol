import { Miembro } from './Miembro';

export class Jugador extends Miembro {
  private numero: number;
  private peso: number;
  private altura: number;
  private posicion: string;
  constructor(id: number, edad: number, nombre: string, numero: number, peso: number, altura: number, posicion: string) {
    super(id, edad, nombre);
    this.numero = numero;
    this.peso = peso;
    this.altura = altura;
    this.posicion = posicion;
  }
  getNumero(): number {
    return this.numero;
  }
  setNumero(numero: number): void {
    this.numero = numero;
  }
  getPeso(): number {
    return this.peso;
  }
  setPeso(peso: number): void {
    this.peso = peso;
  }
  getAltura(): number {
    return this.altura;
  }
  setAltura(altura: number): void {
    this.altura = altura;
  }
  getPosicion(): string {
    return this.posicion;
  }
  setPosicion(posicion: string): void {
    this.posicion = posicion;
  }
}
