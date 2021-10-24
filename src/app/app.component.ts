import { Component,Input,OnInit } from '@angular/core';
import { AppareilServiceComponent } from './appareil-service/appareil-service.component';
import { AppareilComponent } from './appareil/appareil.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 @Input() isAuth = false;
  //pipes
  lastUpdate = new Date();
  @Input() appareilStatus: string = '';
 

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

  
  constructor(private appareilService: AppareilServiceComponent) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareilName = this.appareilService.appareilName;
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


