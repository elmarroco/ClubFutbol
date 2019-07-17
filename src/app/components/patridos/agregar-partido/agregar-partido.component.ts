import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PartidosService } from 'src/app/services/partidos.service';
import { Partido } from 'src/app/models/Partido';


@Component({
  selector: 'app-agregar-partido',
  templateUrl: './agregar-partido.component.html',
  styleUrls: ['./agregar-partido.component.css']
})
export class AgregarPartidoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private partidosService: PartidosService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    const listaPartidos = this.partidosService.listaPartidos;
    const partido = form.value;
    const size = listaPartidos.getNumeroDePartidos();
    console.log(size);
    let id = 0;
    if (size === 0) {
      id = 1;
    } else {
      id = listaPartidos.partidos[size - 1].idPartido + 1;
    }
    listaPartidos.agregarPartido(
      new Partido(
        id,
        partido.rival,
        partido.cancha,
        new Date(partido.date)
      )
    );
    this.partidosService.listaPartidos = listaPartidos;
    this.router.navigate([`../`], { relativeTo: this.route });
  }
}
