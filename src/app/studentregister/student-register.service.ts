import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsRegisterService {

  constructor(private http:HttpClient) {
  }
  apiGetUrl="https://program-learning-platform-backend.onrender.com/";
  apiSetUrl="https://program-learning-platform-backend.onrender.com/post";
  apiPutUrl="https://program-learning-platform-backend.onrender.com/user";
  logValidateUrl="https://program-learning-platform-backend.onrender.com/login";

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
