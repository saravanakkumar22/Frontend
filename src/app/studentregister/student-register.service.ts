import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsRegisterService {

  constructor(private http:HttpClient) {
  }
  apiGetUrl="http://localhost:3000/";
  apiSetUrl="http://localhost:3000/post";
  apiPutUrl="http://localhost:3000/user";
  logValidateUrl="http://localhost:3000/login";

  GetStudentDetails():Observable<any>{
    return this.http.get(`${this.apiGetUrl}`);
  }

  SetStudentDetails(data:any):Observable<any>{
    return this.http.post(`${this.apiSetUrl}`,data);
  }

  deleteStudentDetails(id:any){
    return this.http.delete(this.apiPutUrl+id);
  }

  updateStudentDetails(id:any){
    // return this.http.put("http://localhost:8000/user/"+id);
  }

  loginValidation(data:any):Observable<any>{
    return this.http.post(`${this.logValidateUrl}`,data);
  }

}
