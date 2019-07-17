import { Component, OnInit } from '@angular/core';
import { MiembrosService } from 'src/app/services/miembros.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Medico } from 'src/app/models/miembros/Medico';


@Component({
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.css']
})
export class AgregarMedicoComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private miembrosService: MiembrosService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    const listaMedicos = this.miembrosService.getListaMedicos();
    const medico = form.value;
    const index = this.miembrosService.getListaMedicos().getNumeroDeMedicos();
    let id = 0;
    if (index === 0) {
      id = 1;
    } else {
      id = this.miembrosService.getListaMedicos().getMedico(index).getID() + 1;
    }
    listaMedicos.agregarMedico(
      new Medico(
        id,
        medico.edad,
        medico.nombre,
        medico.cedula
      )
    );
    this.miembrosService.setListaMedicos(listaMedicos);
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
