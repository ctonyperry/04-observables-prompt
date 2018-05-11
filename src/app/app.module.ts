import { InternalDefensesModule } from './internal-defenses/internal-defenses.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DeathSquareComponent } from './internal-defenses/death-square/death-square.component';
import { TurretComponent } from './internal-defenses/turret/turret.component';
import { LaserCannonComponent } from './internal-defenses/laser-cannon/laser-cannon.component';
import { TieFighterComponent } from './external-defenses/tie-fighter/tie-fighter.component';
import {StarDestroyerComponent} from './external-defenses/star-destroyer/star-destroyer.component'
import { ExternalDefensesModule } from './external-defenses/external-defenses.module';
import { InfoWindowComponent } from './info-window/info-window.component';
import { AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    InfoWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InternalDefensesModule,
    ExternalDefensesModule,
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
