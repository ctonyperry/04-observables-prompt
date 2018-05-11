
import { TurretComponent } from './../internal-defenses/turret/turret.component';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators'
 
import { InfoWindowService } from './info-window.service';

@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css'],
  providers: [InfoWindowService]
})

export class InfoWindowComponent implements OnInit {

  infoWindowSubject  = new Subject();
  //turretNumber: any;
  damage: any;
  dataBanks: any;

  constructor() { 
  }

  ngOnInit() {

    console.log(this);
  }

}
