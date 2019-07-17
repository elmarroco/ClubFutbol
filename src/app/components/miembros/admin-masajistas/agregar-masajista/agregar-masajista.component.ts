import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Masajista } from 'src/app/models/miembros/Masajista';


@Component({
  selector: 'app-agregar-masajista',
  templateUrl: './agregar-masajista.component.html',
  styleUrls: ['./agregar-masajista.component.css']
})
export class AgregarMasajistaComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miembrosService: MiembrosService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    const listaMasajistas = this.miembrosService.getListaMasajistas();
    const masajista = form.value;
    const index = this.miembrosService.getListaMasajistas().getNumeroDeMasajistas();
    let id = 0;
    if (index === 0) {
      id = 1;
    } else {
      id = this.miembrosService.getListaMasajistas().getMasajista(index).getID() + 1;
    }
    listaMasajistas.agregarMasajista(
      new Masajista(
        id,
        masajista.edad,
        masajista.nombre,
        masajista.cedula
      )
    );
    this.miembrosService.setListaMasajistas(listaMasajistas);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
