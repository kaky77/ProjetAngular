import { Component,Input,OnDestroy,OnInit } from '@angular/core';
import { AppareilsService } from './services/appareils.service';
import { Observable, Subscription } from 'rxjs';
import'rxjs/Rx';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit {
 @Input() isAuth = false;
  //pipes
 public lastUpdate = new Date();
  @Input() appareilStatus: string = '';
  secondes: number=0;
  counterSubscription: Subscription | undefined;

  //un array avec trois objets. chaque objet ayant une propriété  name  et une
  //propriété  status
  appareilName:any[] = [
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

  
  constructor(private appareilService: AppareilsService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  
  ngOnInit() {
    this.appareilName = this.appareilService.appareilName;
   const counter = Observable.interval(1000);
   this.counterSubscription = counter.subscribe(
    (value) => {
      this.secondes = value;
    },
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    () => {
      console.log('Observable complete!');
    }
  );
 
  }

  

}
