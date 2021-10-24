import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-appareil-component',
  templateUrl: './edit-appareil-component.component.html',
  styleUrls: ['./edit-appareil-component.component.scss']
})
export class EditAppareilComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
