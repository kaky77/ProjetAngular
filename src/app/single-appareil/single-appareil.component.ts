import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {


  name:(string | undefined)='Appareil';
  status:(string|undefined)='Status';

  constructor(private appareilService:AppareilsService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id:number = this.route.snapshot.params['id'];
    this.name= this.appareilService.getAppareilById(+ id)!.name;
    this.status =this.appareilService.getAppareilById(+ id)!.status;
  }

}

