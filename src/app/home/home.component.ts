import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FuButton } from "../model/fu-button";
import { Standing } from "../model/standing";
import { HomeService } from "./home.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  buttons : FuButton[] = [
    {name: 'England', selected: false, idLabel: 'england', idStanding: 39},
    {name: 'Spain', selected: false, idLabel: 'spain', idStanding: 140},
    {name: 'Germany', selected: false, idLabel: 'germany', idStanding: 78},
    {name: 'France', selected: false, idLabel: 'france', idStanding: 61},
    {name: 'Italy', selected: false, idLabel: 'italy', idStanding: 135}
  ]

  selectedLeague: Standing[] = [];
  currentYear: number = 0;
  displayedColumns : string[] = ['rank','icon', 'name', 'games', 'wins', 'loses', 'draws', 'goalDifference', 'points']

  buttonSelected : string = '';

  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute, private snackBar: MatSnackBar){}

  ngOnInit(): void{
    this.currentYear = new Date().getFullYear();
    const lastSelectedLeague = sessionStorage.getItem("lastSelectedLeague");
    if(lastSelectedLeague){
      this.selectedLeague = JSON.parse(lastSelectedLeague)
      this.buttons.forEach(button => {
        const lastButtonSelected = sessionStorage.getItem("lastSelectedLeagueName")
        if(lastButtonSelected && JSON.parse(lastButtonSelected) === button.name){
          button.selected = true;
        }
      })
    }
  }

  public selectedButton(buttonName: string, idStanding: number): void{
    this.selectButton(buttonName)
    const standingInStorage = sessionStorage.getItem(buttonName)
    if(standingInStorage){
      this.selectedLeague = JSON.parse(standingInStorage)
    }
    else{
      this.homeService.getStandings(idStanding, this.currentYear).subscribe({
        next: (onSuccess) =>{
          if(onSuccess.response.length > 0 &&
             onSuccess.response[0].league &&
             onSuccess.response[0].league.standings &&
             onSuccess.response[0].league.standings.length > 0){
            this.selectedLeague = onSuccess.response[0].league.standings[0];
            sessionStorage.setItem(buttonName, JSON.stringify(this.selectedLeague))

          }
        },
        error: () => {
          this.snackBar.open("Error loading the standings", " ", {duration:2000})
        }
      })
    }

  }

  private selectButton(buttonName:string): void{
    this.buttonSelected = buttonName
    this.buttons.forEach(button => {
      if(button.name === buttonName) button.selected = true
      else{
        button.selected = false
      }
    })
  }

  public goToTeamFixtures(teamId: number): void{
    sessionStorage.setItem("lastSelectedLeague", JSON.stringify(this.selectedLeague))
    sessionStorage.setItem("lastSelectedLeagueName", JSON.stringify(this.buttonSelected))
    this.router.navigate(["fixture/" + teamId + "/" + this.currentYear], {relativeTo: this.activatedRoute})
  }


}
