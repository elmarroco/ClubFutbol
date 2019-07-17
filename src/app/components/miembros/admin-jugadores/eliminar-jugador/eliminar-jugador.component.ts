import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MiembrosService } from 'src/app/services/miembros.service';
import { ListaJugador } from 'src/app/models/listas/ListaJugadores';

@Component({
  selector: 'app-eliminar-jugador',
  templateUrl: './eliminar-jugador.component.html',
  styleUrls: ['./eliminar-jugador.component.css']
})
export class EliminarJugadorComponent implements OnInit {
  jugadores: ListaJugador;

  constructor(private router: Router, private route: ActivatedRoute, private miembrosService: MiembrosService) {
    this.jugadores = this.miembrosService.getListaJugadores();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    const idJugador = parseInt(form.value.jugador, 10);
    this.jugadores.eliminarJugador(idJugador);
    this.miembrosService.setListaJugadores(this.jugadores);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
