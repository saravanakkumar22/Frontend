import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsRegisterService } from '../studentregister/student-register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  studentDetails: any;
  deleteDetail: any;
  constructor(private service: StudentsRegisterService, private router: Router) {
   
    this.service.GetStudentDetails().subscribe((res)=>{
     console.log(res);
     
    });
  }

  ngOnInit(): void {
  }

  postFormData(data: any) {
    console.log(data);
    this.service.SetStudentDetails(data).subscribe((result) => {
      console.log(result, "result==>");

      console.log("success");
      this.redirectToLogin();
    });
  }
  redirectToLogin() {
    this.router.navigate(["/login"]);
  }

  delete(id: any) {
    this.service.deleteStudentDetails(id).subscribe(data => {
      this.deleteDetail = data;
      console.log(this.deleteDetail);
    })
  }

}
