import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MiembrosService } from 'src/app/services/miembros.service';
import { ListaMasajista } from 'src/app/models/listas/ListaMasajistas';


@Component({
  selector: 'app-eliminar-masajista',
  templateUrl: './eliminar-masajista.component.html',
  styleUrls: ['./eliminar-masajista.component.css']
})
export class EliminarMasajistaComponent implements OnInit {
  masajistas: ListaMasajista;

  constructor(private router: Router, private route: ActivatedRoute, private miembrosService: MiembrosService) {
    this.masajistas = this.miembrosService.getListaMasajistas();
  }

  ngOnInit() {
  }

  onSubmit(form) {
    const idMasajista = parseInt(form.value.masajista, 10);
    this.masajistas.eliminarMasajista(idMasajista);
    this.miembrosService.setListaMasajistas(this.masajistas);
    this.router.navigate([`../`], { relativeTo: this.route });
  }
}
