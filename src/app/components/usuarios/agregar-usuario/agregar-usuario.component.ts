import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MiembrosService } from 'src/app/services/miembros.service';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/User';



@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log(form.value);
    const listaUsuarios = this.loginService.listaUsers;
    listaUsuarios.agregarUser(
      new User(
        form.value.username,
        form.value.password,
        form.value.rol
      )
    );
    this.loginService.listaUsers = listaUsuarios;
    this.router.navigate([`../`], { relativeTo: this.route });
  }
}
