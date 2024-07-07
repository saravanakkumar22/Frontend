import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chatservice/chat.service';
import { LoginDataServiceService } from '../loginData/login-data.service';



@Component({
  selector: 'app-groupchat',
  templateUrl: './groupchat.component.html',
  styleUrls: ['./groupchat.component.css']
})
export class GroupchatComponent implements  OnInit {
  constructor( private chatService:ChatService, private logData:LoginDataServiceService, ){}

  details:any={
    message:"",
    userName:"",
    sendTime:""
  };

  // you send message
  youSendMessages:Array<any> = [];
  youMessageShowHide:boolean = false;
  recivedMessage:any={
    userName:""
  };
  //get send message data
  getSendMessages:Array<any>=[]; // send message and socket recive valuse stored
  getSendMessageId:Array<any>=[];
  lastMessageId:any = "";

  // login data details
  sessionGetData:any="";

  // get old messages
  getOldMessages:Array<any>= [];

  //date variables
  newDate:any ="";
  currentTime:any="";
  hours:any="";
  mins:any= "";
  secs:any = "";



  ngOnInit(): void {
console.log(this.lastMessageId,"last Message Id");

    // old messages get
    this.chatService.getOldMessages().subscribe((data) => {
      data.map((item:any) => {
        this.getOldMessages.push(item);
        console.log(this.getOldMessages);

        if(this.lastMessageId < item.id){
          this.lastMessageId = item.id
          console.log(this.lastMessageId);
        }
      });
    });

    // Socket.io send data get
    this.chatService.listMessage().subscribe((data) => {
      data.result.map((item:any) =>{
        if(this.getSendMessageId != item.id){
          this.getSendMessages.push(item) ;
          // this.recivedMessage.userName = item.userName;
          console.log(this.getSendMessages);
          this.getSendMessageId.push(item.id);
          console.log(this.getSendMessageId);
          console.log(this.recivedMessage);
          
        }
      });
    });

    // ----------------get user Name in session storage---------

    this.sessionGetData = sessionStorage.getItem("userDetails");
    this.details.userName = JSON.parse(this.sessionGetData);
    console.log(this.details.userName.Name);

    this.logData.share.subscribe((data) => {
      console.log(data);
    })
  }

  sendMessage(){
    this.newDate = new Date();
    this.hours = this.padZero(this.newDate.getHours());
    this.mins = this.padZero(this.newDate. getMinutes());
    this.secs = this.padZero(this.newDate . getSeconds());
    this.details.sendTime = this.hours+ ":" +this.mins;
    this.chatService.sendMessage(this.details.message,this.details.userName.Name,this.details.sendTime);
   this.details.message = "";

   setTimeout(()=>{
    this.chatService.getOldMessages().subscribe((data:any) =>{
      data.map((item:any) => {
        console.log(this.lastMessageId);

          if(this.details.userName.Name === item.userName && this.lastMessageId < item.id){
            this.getSendMessages.push(item);
            this.youMessageShowHide = true;
            this.lastMessageId = item.id;
                        console.log("single Details get")
            console.log(this.getSendMessages);
            console.log(this.lastMessageId);
            
          }
          else{
            console.log("not single Details get")
          }
      });
    });
   },200);
  }
 
  
  padZero(num:any){
    return num < 10 ? "0" + num : " " + num;
   }
 



}
