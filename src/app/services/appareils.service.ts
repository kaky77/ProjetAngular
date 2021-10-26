import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {

  public appareilName = [
    {
      id:1,
      name: 'Machine à  laver',
      status: 'éteint'
    },
    {
      id:2,
      name: 'Frigo',
      status: 'allumé'
    },
    {
      id:3,
      name: 'Ordinateur',
      status: 'éteint'
    }
  ];

  constructor() { }

  
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

  getAppareilById(id: number) {
    const appareil = this.appareilName.find(
      (appareilObjet:any) => {
        return appareilObjet.id === id;
      }
    );
    return appareil;
}

}
