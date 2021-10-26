import { Component, OnInit } from '@angular/core';
import { AppareilsService } from '../services/appareils.service';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth:boolean=false;
  appareilName: any[]=[];

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

  constructor(private appareilService:AppareilsService) { }

  ngOnInit(): void {
    this.appareilName=this.appareilService.appareilName;
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    if(confirm('Etes-vous sùr de vouloir tout éteindre :) ? '))
    {
      this.appareilService.switchOffAll();
      return 0;
    } else{
      return null;
    }
    
  }


}
