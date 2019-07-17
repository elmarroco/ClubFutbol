import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ListaUsers } from 'src/app/models/listas/ListaUsers';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: ListaUsers;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {
    this.users = this.loginService.listaUsers;
    document.querySelector('nav').classList.add('d-none');
    // document.querySelector('body').style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVLmvsozOe-X1-I_r_TFvPML4dnhp_QboBHXoxIV291rPksdNYwA")';
  }

  ngOnInit() {
  }

  onSubmit(form) {
    console.log('Form Submitted');
    console.log(form.value);
    const userForm = form.value;
    if (this.users.getUser(userForm.user)) {
      if (this.users.getUser(userForm.user).password === userForm.password) {
        this.router.navigate([`/home`], { relativeTo: this.route });
      } else {
        alert('Contraseña Incorrecta\n Intenta de nuevo');
      }
    } else {
      alert('Nombre de Usuario Incorrecto\n Intenta de nuevo');
    }
  }
}
