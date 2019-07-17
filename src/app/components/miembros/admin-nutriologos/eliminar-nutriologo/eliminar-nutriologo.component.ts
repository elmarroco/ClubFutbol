import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MiembrosService } from 'src/app/services/miembros.service';
import { ListaNutriologo } from 'src/app/models/listas/ListaNutriologos';

@Component({
  selector: 'app-eliminar-nutriologo',
  templateUrl: './eliminar-nutriologo.component.html',
  styleUrls: ['./eliminar-nutriologo.component.css']
})
export class EliminarNutriologoComponent implements OnInit {
  nutriologos: ListaNutriologo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miembrosService: MiembrosService
  ) {
    this.nutriologos = this.miembrosService.getListaNutriologos();
   }

  ngOnInit() {
  }

  onSubmit(form) {
    const idNutriologo = parseInt(form.value.nutriologo, 10);
    this.nutriologos.eliminarNutriologo(idNutriologo);
    this.miembrosService.setListaNutriologos(this.nutriologos);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
