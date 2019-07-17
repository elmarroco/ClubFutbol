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
  setID(id: number): void {
    this.id = id;
  }
  getEdad(): number {
    return this.edad;
  }
  setEdad(edad: number): void {
    this.edad = edad;
  }
  getNombre(): string {
    return this.nombre;
  }
  setNombre(nombre: string): void {
    this.nombre = nombre;
  }
}
