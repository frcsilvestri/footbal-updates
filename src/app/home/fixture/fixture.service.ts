import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Fixture } from "../../model/fixture";

@Injectable({
  providedIn: 'root'
})
export class FixtureService {

  private apiSportsUrl: string = "https://v3.football.api-sports.io/" 

  constructor(private http:HttpClient) { }


  getLastTenFixtures(idTeam: number, year: number): Observable<{response: Fixture[]}>{
    const headerData = {
		  "x-apisports-key": '62b315d166d281f611e81e25e0d3d07d'
    }
    const requestOption = {
      headers: new HttpHeaders(headerData)
    }
    return this.http.get<{response: Fixture[]}>(this.apiSportsUrl + 'fixtures?team=' + idTeam + "&season=" + year + "&last=10",  requestOption)
  }

}