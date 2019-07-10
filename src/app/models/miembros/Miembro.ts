export class Miembro {
  private id: number;
  private edad: number;
  private nombre: string;
  constructor(id: number, edad: number, nombre: string) {
    this.id = id;
    this.edad = edad;
    this.nombre = nombre;
  }
  getID(): number {
    return this.id;
  }
  getEdad(): number {
    return this.edad;
  }
  getNombre(): string {
    return this.nombre;
  }
}
