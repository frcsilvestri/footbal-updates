import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { League } from "../model/league";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiSportsUrl: string = "https://v3.football.api-sports.io/" 

  constructor(private http:HttpClient) { }


  getStandings(idLeague: number, year: number): Observable<{response: League[]}>{
    const headerData = {
		  "x-apisports-key": '62b315d166d281f611e81e25e0d3d07d'
    }
    const requestOption = {
      headers: new HttpHeaders(headerData)
    }
    return this.http.get<{response: League[]}>(this.apiSportsUrl + 'standings?league=' + idLeague + "&season=" + year,  requestOption)
  }

}