import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppareilsService } from '../services/appareils.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  isAuth:boolean=false;
  appareilName: any[]=[];
  appareilSubscription!: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  

  constructor(private appareilService:AppareilsService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
   }
   ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareilName = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
    return null;
  }

  ngOnDestroy() {
    this.appareilSubscription.unsubscribe();
  }


}
