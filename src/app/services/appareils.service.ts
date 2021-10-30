import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

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

addAppareil(name:string,status:string){
  const appareilObject={
    id:0,
    name:'',
    status:''
  };
  appareilObject.name=name;
  appareilObject.status=status;
  appareilObject.id=this.appareilName[(this.appareilName.length-1)].id+1;
  this.appareilName.push(appareilObject);
  this.emitAppareilSubject();
}
saveAppareilsToServer() {
  this.httpClient
    .put('https://projetangular-3c365-default-rtdb.firebaseio.com/appareils.json', this.appareilName)
    .subscribe(
      () => {
        console.log('Enregistrement terminé !');
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

getAppareilsFromServer() {
  this.httpClient
    .get<any[]>('https://httpclient-demo.firebaseio.com/appareils.json')
    .subscribe(
      (response) => {
        this.appareilName = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
}

}
