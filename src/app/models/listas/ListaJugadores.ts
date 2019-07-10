import { Jugador } from '../miembros/Jugador';

export class ListaJugador {
  private jugadores: Jugador[];
  constructor(jugador: Jugador) {
    this.jugadores = [];
    this.jugadores.push(jugador);
  }
  public getListaJugador() {
    return this.jugadores;
  }
  public agregarJugador(jugador: Jugador): void {
    this.jugadores.push(jugador);
  }
  public getJugador(idJugador: number): Jugador {
    return this.jugadores.find((jugador) => {
      return jugador.getID() === idJugador;
    });
  }
  public eliminarJugador(idJugador: number): void {
    this.jugadores.filter((jugador) => {
      return jugador.getID() === idJugador;
    });
  }
  public getNumeroDejugadores(): number {
    return this.jugadores.length;
  }
}
