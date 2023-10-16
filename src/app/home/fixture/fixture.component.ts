import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';
import { FixtureService } from "./fixture.service";
import { Fixture } from "../../model/fixture";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.scss']
})

export class FixtureComponent implements OnInit {

  teamId: number | undefined;
  year: number | undefined;
  noFixturesPresent = false;
  fixtures : Fixture[] = [];

  constructor(private route: ActivatedRoute, private location : Location, private fixtureService: FixtureService, private snackBar: MatSnackBar){}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      if(params?.['idTeam'] && params?.['year']){
        this.teamId = params?.['idTeam'];
        this.year = params?.['year']
        this.fixtureService.getLastTenFixtures(Number(this.teamId), Number(this.year)).subscribe({
          next: (onSuccess) =>{
            if(onSuccess.response){
              this.fixtures = onSuccess.response;
            }
          },
          error: () => {
            this.snackBar.open("Error loading the fixtures", " ", {duration:2000})
          }
        })

      }
      else{
        this.noFixturesPresent = true
      }
    })
  }

  back(){
    this.location.back();
  }


}
