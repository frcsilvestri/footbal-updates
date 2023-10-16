import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { FixtureRoutingModule } from "./fixture-routing.module";
import { FixtureComponent } from "./fixture.component";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
   FixtureRoutingModule,
   CommonModule,
   MatButtonModule,
   MatSnackBarModule
  ],
  declarations: [
   FixtureComponent
  ],

})
export class FixtureModule {}
