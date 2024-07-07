import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeContentService  {

  constructor(private http:HttpClient) { }

  //-------get dashBoard main home content----------

  getHomecontent():Observable<any> {
    return this.http.get("http://localhost:4000/getProgramingLanguages");
  }

  
  //-----get dashBoard main home content show full details------------------

  getFullDetails():Observable<any>{
    return this.http.get("http://localhost:4000/getProgramingLanguageDetails")
  }

}
