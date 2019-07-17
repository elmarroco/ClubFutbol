import { Injectable } from '@angular/core';
import { ListaJugador } from '../models/listas/ListaJugadores';
import { Jugador } from '../models/miembros/Jugador';
import { ListaMasajista } from '../models/listas/ListaMasajistas';
import { Masajista } from '../models/miembros/Masajista';
import { ListaMedico } from '../models/listas/ListaMedicos';
import { ListaNutriologo } from '../models/listas/ListaNutriologos';
import { Medico } from '../models/miembros/Medico';
import { Nutriologo } from '../models/miembros/Nutriologo';

@Injectable({
  providedIn: 'root'
})
export class MiembrosService {
  listaJugadores: ListaJugador;
  listaMasajistas: ListaMasajista;
  listaMedicos: ListaMedico;
  listaNutriologos: ListaNutriologo;
  constructor() {
    // Creando listas globales
    this.listaJugadores = new ListaJugador(new Jugador(1, 22, 'Jose Masri', 10, 70, 180, 'delantero'));
    this.listaJugadores.agregarJugador(new Jugador(2, 20, 'Milton Ponce', 9, 70, 175, 'medio'));
    this.listaJugadores.agregarJugador(new Jugador(3, 19, 'Javier García', 7, 65, 170, 'defensa'));
    this.listaMasajistas = new ListaMasajista(
      new Masajista(1, 45, 'Ernesto Saldaña', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    );
    this.listaMasajistas.agregarMasajista(
      new Masajista(2, 30, 'Fernanda Hernández', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    );
    this.listaMedicos = new ListaMedico(
      new Medico(1, 38, 'Pedro Rotberg', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    );
    this.listaMedicos.agregarMedico(
      new Medico(2, 58, 'Juan Manuel Cruz', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    );
    this.listaNutriologos = new ListaNutriologo(
      new Nutriologo(1, 29, 'Silvia Gutierrez', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    );
    this.listaNutriologos.agregarNutriologo(
      new Nutriologo(2, 58, 'Carla Fernández', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))
    );
  }
  getListaJugadores(): ListaJugador {
    return this.listaJugadores;
  }
  setListaJugadores(listaJugadores: ListaJugador): void {
    this.listaJugadores = listaJugadores;
  }
  getListaMasajistas(): ListaMasajista {
    return this.listaMasajistas;
  }
  setListaMasajistas(listaMasajistas: ListaMasajista): void {
    this.listaMasajistas = listaMasajistas;
  }
  getListaMedicos(): ListaMedico {
    return this.listaMedicos;
  }
  setListaMedicos(listaMedicos: ListaMedico): void {
    this.listaMedicos = listaMedicos;
  }
  getListaNutriologos(): ListaNutriologo {
    return this.listaNutriologos;
  }
  setListaNutriologos(listaNutriologos: ListaNutriologo): void {
    this.listaNutriologos = listaNutriologos;
  }
}
