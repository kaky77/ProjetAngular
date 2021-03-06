import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModule } from '../models/user/user.module';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm!: FormGroup  ;


  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

 public initForm() {
    this.userForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      drinkPreference: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    });
}

onSubmitForm() {
  const formValue = this.userForm.value;
  const newUser = new UserModule(
    formValue['firstName'],
    formValue['lastName'],
    formValue['email'],
    formValue['drinkPreference'],
    formValue['hobbies'] ? formValue['hobbies'] : []
  );
  this.userService.addUser(newUser);
  this.router.navigate(['/users']);
}
getHobbies(): FormArray {
  return this.userForm.get('hobbies') as FormArray;
}

onAddHobby() {
  const newHobbyControl = this.formBuilder.control(null, Validators.required);
  this.getHobbies().push(newHobbyControl);
}

}
