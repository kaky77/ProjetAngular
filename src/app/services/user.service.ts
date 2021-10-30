import { Injectable } from '@angular/core';
import { UserModule } from '../models/user/user.module';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  private users:  UserModule[]=[];
  userSubject = new Subject< UserModule[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user:  UserModule) {
    this.users.push(user);
    this.emitUsers();
  }

 
}
