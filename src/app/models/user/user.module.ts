import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ProductService {

  constructor() { }
  getProducts(): UserModule[] {
    return UserModule.map(p =>new UserModule(p.firstName, p.lastName, p.email, p.drinkPreference, p.hobbies));
  }
} 
export class UserModule {
    static map(arg0: (p: any) => UserModule): UserModule[] {
      throw new Error('Method not implemented.');
    }

    constructor(
      public firstName: string,
      public lastName: string,
      public email: string,
      public drinkPreference: string,
      public hobbies?: string[]
    ) {}
  
 }
