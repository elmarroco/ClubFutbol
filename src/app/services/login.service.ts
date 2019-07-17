import { Injectable } from '@angular/core';
import { ListaUsers } from '../models/listas/ListaUsers';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  listaUsers: ListaUsers;

  constructor() {
    this.listaUsers = new ListaUsers(new User('admin', '123456', 'admin'));
  }
}
