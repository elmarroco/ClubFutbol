import { Component, OnInit } from '@angular/core';
import { ListaUsers } from 'src/app/models/listas/ListaUsers';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-visualizar-usuarios',
  templateUrl: './visualizar-usuarios.component.html',
  styleUrls: ['./visualizar-usuarios.component.css']
})
export class VisualizarUsuariosComponent implements OnInit {
  listaUsuarios: ListaUsers;

  constructor(private loginService: LoginService) {
    this.listaUsuarios = this.loginService.listaUsers;
  }

  ngOnInit() {
  }

}
