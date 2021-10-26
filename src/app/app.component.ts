import { Component,Input,OnInit } from '@angular/core';
import { AppareilsService } from './services/appareils.service';
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

  
  constructor(private appareilService: AppareilsService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  ngOnInit() {
    this.appareilName = this.appareilService.appareilName;
}
  
  

}


