import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginDataServiceService {

 private storeData =new BehaviorSubject("Default-message");
public share=this.storeData.asObservable();
constructor(){

}
updateData(text:any){
  this.storeData.next(text);
}
}
