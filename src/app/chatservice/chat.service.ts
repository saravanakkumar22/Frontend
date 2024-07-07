import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket:Socket, private http:HttpClient) { }

  sendMessage(message:any, userName:any, sendTime:any){
     this.socket.emit("message",message,userName,sendTime);
  }

 listMessage():Observable<any>{
  return this.socket.fromEvent("recive").pipe(map((data) => data));
 }

 getOldMessages():Observable<any>{
  return this.http.get("http://localhost:4000/getOldMessages");
 }

}
