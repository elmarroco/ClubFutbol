import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MiembrosService } from 'src/app/services/miembros.service';
import { ListaMedico } from 'src/app/models/listas/ListaMedicos';


@Component({
  selector: 'app-eliminar-medico',
  templateUrl: './eliminar-medico.component.html',
  styleUrls: ['./eliminar-medico.component.css']
})
export class EliminarMedicoComponent implements OnInit {
  medicos: ListaMedico;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miembrosService: MiembrosService
  ) {
    this.medicos = miembrosService.getListaMedicos();
   }

  ngOnInit() {
  }

  onSubmit(form) {
    const idMedico = parseInt(form.value.medico, 10);
    this.medicos.eliminarMedico(idMedico);
    this.miembrosService.setListaMedicos(this.medicos);
    this.router.navigate([`../`], { relativeTo: this.route });
  }
}
