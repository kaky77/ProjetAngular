import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-service',
  templateUrl: './appareil-service.component.html',
  styleUrls: ['./appareil-service.component.scss']
})
export class AppareilServiceComponent implements OnInit {

  appareilName = [
    {
      name: 'Machine à  laver',
      status: 'éteint'
    },
    {
      name: 'Frigo',
      status: 'allumé'
    },
    {
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
//création de deux méthodes pour allumer ou étiendre d'un coup tous les appareils
  switchOnAll(){
    for(let element of this.appareilName ){
      element.status='allumé';
    }
    
  }

  switchOffAll(){
    for(let element of this.appareilName){
      element.status='éteint';
    }
  }

  switchOnOne(i: number) {
    this.appareilName[i].status = 'allumé';
}

  switchOffOne(i: number) {
    this.appareilName[i].status = 'éteint';
  }


}
