import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';
import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TieFighterComponent,
    StarDestroyerComponent
  ],
  exports:[
    TieFighterComponent,
    StarDestroyerComponent
  ]
})
export class ExternalDefensesModule { }
