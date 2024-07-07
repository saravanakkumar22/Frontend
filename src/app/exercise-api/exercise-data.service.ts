import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {

  constructor(private http:HttpClient) { }


 
  postExerciseData(data:any):Observable <any>{
    return this.http.post("http://localhost:4000/postExerciseData",data);
  }
//get single value
  getExerciseData(exericesId:any):Observable <any> {
    return this.http.get("http://localhost:4000/getExerciseData/"+exericesId);
  }

  //get multe value
  lastId:number=0; getExerciseDataAll():Observable<any>{
    return this.http.get("http://localhost:4000/getAllExerciseData");
  }
}
