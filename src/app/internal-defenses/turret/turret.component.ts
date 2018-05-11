import { InfoWindowComponent } from './../../info-window/info-window.component';
import { Component, OnInit, Input } from '@angular/core';
import { InfoWindowService } from '../../info-window/info-window.service';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-turret',
  templateUrl: './turret.component.html',
  styleUrls: ['./turret.component.css'],
  providers: [InfoWindowService]
})
export class TurretComponent implements OnInit {

  infoWindowSubject = new Subject();
  infoWindowComponent: InfoWindowComponent = new InfoWindowComponent();
  @Input('turretNumber') turretNumber: number;
  damage: any;

  constructor(private infoWindowService: InfoWindowService) { 

  }

  ngOnInit() {
 
    this.infoWindowSubject.subscribe(turretNumber=>this.infoWindowService
      .findTurret(turretNumber)
      .subscribe(response=>{
        this.damage = response.json().damage;
      }
      )
    );
  }

  findTurret(turretNumber){
    this.infoWindowSubject.next(turretNumber);
  }


}
