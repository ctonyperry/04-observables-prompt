import { AppRoutingModule } from './../app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { TurretComponent } from './turret/turret.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ],
  exports:[
    DeathSquareComponent,
    LaserCannonComponent,
    TurretComponent
  ]
})
export class InternalDefensesModule { }
