import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class AppareilsService {

  appareilsSubject = new Subject<any[]>();

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

  emitAppareilSubject() {
    this.appareilsSubject.next(this.appareilName.slice());
  }

//création de deux méthodes pour allumer ou étiendre d'un coup tous les appareils
  switchOnAll(){
    for(let element of this.appareilName ){
      element.status='allumé';
    }
    this.emitAppareilSubject();
  }

  switchOffAll(){
    for(let element of this.appareilName){
      element.status='éteint';
      this.emitAppareilSubject();
    }
   
  }

  switchOnOne(i: number) {
    this.appareilName[i].status = 'allumé';
    this.emitAppareilSubject();
}

  switchOffOne(i: number) {
    this.appareilName[i].status = 'éteint';
    this.emitAppareilSubject();
  }

  public getAppareilById(id: number) {
    const appareil = this.appareilName.find(
      (s) => {
        return s.id === id;
      }
    );
    return appareil;
}

}
