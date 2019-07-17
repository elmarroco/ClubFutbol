import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';
import { Jugador } from 'src/app/models/miembros/Jugador';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-jugador',
  templateUrl: './agregar-jugador.component.html',
  styleUrls: ['./agregar-jugador.component.css']
})
export class AgregarJugadorComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private miembrosService: MiembrosService) {

  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    const listaJugadores = this.miembrosService.getListaJugadores();
    const jugador = form.value;
    const index = this.miembrosService.getListaJugadores().getNumeroDeJugadores();
    let id = 0;
    if (index === 0) {
      id = 1;
    } else {
      id = this.miembrosService.getListaJugadores().getJugador(index).getID() + 1;
    }
    listaJugadores.agregarJugador(
      new Jugador(
        id,
        jugador.edad, jugador.nombre,
        jugador.numero, jugador.peso,
        jugador.altura, jugador.posicion
      )
    );
    this.miembrosService.setListaJugadores(listaJugadores);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
