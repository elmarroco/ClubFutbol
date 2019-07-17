import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaPartidos } from 'src/app/models/listas/ListaPartidos';
import { PartidosService } from 'src/app/services/partidos.service';


@Component({
  selector: 'app-eliminar-partido',
  templateUrl: './eliminar-partido.component.html',
  styleUrls: ['./eliminar-partido.component.css']
})
export class EliminarPartidoComponent implements OnInit {
  listaPartidos: ListaPartidos;

  constructor(private router: Router, private route: ActivatedRoute, private partidosService: PartidosService) {
    this.listaPartidos = this.partidosService.listaPartidos;
  }

  ngOnInit() {
  }
  onSubmit(form) {
    const idPartido = parseInt(form.value.partido, 10);
    this.listaPartidos.eliminarPartido(idPartido);
    this.partidosService.listaPartidos = this.listaPartidos;
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
