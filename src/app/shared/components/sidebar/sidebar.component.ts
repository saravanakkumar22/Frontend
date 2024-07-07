import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginDataServiceService } from 'src/app/loginData/login-data.service';
import { StudentsRegisterService } from 'src/app/studentregister/student-register.service';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sessionGetData:any="";
  logDataDetails:any="";
  subscription!:Subscription;
  studentDetail:any="";
  profile:boolean=false;
  activeButton:number=1;
  constructor(private service:StudentsRegisterService, private logData:LoginDataServiceService){
   
  }

  //login data share in dashbord 
ngOnInit(): void {

  this.service.GetStudentDetails().subscribe((result)=>{
    this.studentDetail=result;
    // console.log(this.studentDetail);
  });

  this.sessionGetData = sessionStorage.getItem("userDetails");
  this.logDataDetails = JSON.parse(this.sessionGetData);
  console.log(this.logDataDetails);
 
}
hideShow(){
  if(this.profile==true){
    this.profile=false;
  }
  else{
    this.profile=true;
  }
}

// sidenav button click color change

sideNavButtonColorchange(buttonNumber:number){
  if(this.activeButton != buttonNumber){
    this.activeButton=buttonNumber;
  }

}

}
