import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListComponent } from "./list/list.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    HeroComponent,
    ListComponent
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})

export class HeroesModule {}
