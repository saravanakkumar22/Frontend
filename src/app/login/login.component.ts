import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { StudentsRegisterService } from '../studentregister/student-register.service';
import { LoginDataServiceService } from '../loginData/login-data.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData: any = {
    Email: "",
    Password: ""
  }

  studentDetails: any = [];
  emailIdInvalid: boolean = false;
  passwordInvalid: boolean = false;
  profileData: any = "";
  logSessionData:any ="";

  constructor(private service: StudentsRegisterService, private router: Router, private logData: LoginDataServiceService) { }

  ngOnInit(): void {
    this.service.GetStudentDetails().subscribe(result => {
      this.studentDetails = result;
      console.log(this.studentDetails);
    });
  }

  checkLoginData(data: any) {
    this.service.loginValidation(data).subscribe(result => {
      if (result.logUserPswd == true) {
        this.profileData=result.profileData;
        console.log(result.logUserPswd);
        console.log(this.profileData);
        alert(result.message);
        this.shareData();
        this.redirectToDashBoard();
      }
      else {
        alert(result.message)
      }
    });
  }

  shareData() {
    sessionStorage.setItem("userDetails",JSON.stringify(this.profileData));
    this.logData.updateData(this.profileData);

  }


  redirectToDashBoard() {
    this.router.navigate(["home/dashboard"]);
    // this.logSessionData = sessionStorage.getItem("userDetails");
    // console.log(this.logSessionData);
  }


  // checkLoginData() {
  //   console.log("function working");
  //   for (let details of this.studentDetails) {
  //     console.log(details.Email);
  //     if (details.Email == this.loginData.Email) {
  //       if (details.Password == this.loginData.Password) {
  //         alert("success");
  //         console.log(details);
  //         this.shareLogData=details;
  //         this.shareData();
  //         this.redirectToDashBoard();
  //       }
  //       else {
  //         this.passwordInvalid = true;
  //       }
  //     }
  //     else {
  //       this.emailIdInvalid = true;
  //     }
  //   }
  // }

}
