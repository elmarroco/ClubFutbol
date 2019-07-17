import { Component, OnInit } from '@angular/core';
import { ListaUsers } from 'src/app/models/listas/ListaUsers';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  listaUsuarios: ListaUsers;

  constructor(private router: Router, private route: ActivatedRoute, private loginService: LoginService) {
    this.listaUsuarios = this.loginService.listaUsers;
   }

  ngOnInit() {
  }
  onSubmit(form) {
    this.listaUsuarios.eliminarUser(form.value.username);
    this.loginService.listaUsers = this.listaUsuarios;
    this.router.navigate([`../`], { relativeTo: this.route });
  }

}
