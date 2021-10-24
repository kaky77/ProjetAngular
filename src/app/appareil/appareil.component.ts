import { Component, Input, OnInit } from '@angular/core';
import { AppareilServiceComponent } from '../appareil-service/appareil-service.component';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  // isAuth = false;
  @Input() appareilName:string ='';
  @Input() appareilStatus: string = '';
  @Input() index:number=0;


  constructor(private appareilService: AppareilServiceComponent) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor()  {
    if (this.appareilStatus === 'allumé') {
      return 'green';
    } else if (this.appareilStatus === 'éteint') {
      return 'red';
    }
    return '';
  }

 
  onSwitch() {
    if(this.appareilStatus === 'allumé') {
      this.appareilService.switchOffOne(this.index);
    } else if(this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
  }


}


