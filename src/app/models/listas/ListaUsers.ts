import { User } from '../User';

export class ListaUsers {
  users: User[];
  constructor(user: User) {
    this.users = [];
    this.users.push(user);
  }
  public agregarUser(user: User): void {
    this.users.push(user);
  }
  public getUser(username: string): User {
    return this.users.find(user => {
      return user.username === username;
    });
  }
  public eliminarUser(username: string): void {
    this.users = this.users.filter(user => {
      return (user.username !== username);
    });
  }
}
