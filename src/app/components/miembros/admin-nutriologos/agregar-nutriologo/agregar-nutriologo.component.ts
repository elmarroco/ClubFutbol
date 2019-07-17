import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Nutriologo } from 'src/app/models/miembros/Nutriologo';

@Component({
  selector: 'app-agregar-nutriologo',
  templateUrl: './agregar-nutriologo.component.html',
  styleUrls: ['./agregar-nutriologo.component.css']
})
export class AgregarNutriologoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miembrosService: MiembrosService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    const listaNutriologos = this.miembrosService.getListaNutriologos();
    const nutriologo = form.value;
    const index = this.miembrosService.getListaNutriologos().getNumeroDeNutriologos();
    let id = 0;
    if (index === 0) {
      id = 1;
    } else {
      id = this.miembrosService.getListaNutriologos().getNutriologo(index).getID() + 1;
    }
    listaNutriologos.agregarNutriologo(
      new Nutriologo(
        id,
        nutriologo.edad,
        nutriologo.nombre,
        nutriologo.cedula
      )
    );
    this.miembrosService.setListaNutriologos(listaNutriologos);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
