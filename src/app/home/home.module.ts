import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports: [
   HomeRoutingModule,
   CommonModule,
   MatButtonModule,
   MatTableModule,
   MatSnackBarModule
  ],
  declarations: [
   HomeComponent
  ],

})
export class HomeModule {}
