import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NotificationService } from '../notification.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={};
  tk:any;
  // resData: Object;
  constructor(private ser:AuthService,private router:Router,private toastr:NotificationService) { }
 
  ngOnInit(): void {
  }

  registerUser(){
    // console.log(this.registerUserData);
    
    this.ser.registerUserSer(this.registerUserData).subscribe(res=>{
      this.tk=res;
      console.log(this.tk);
      this.toastr.showSuccess("registered successfully","Registration status");
  
       
      localStorage.setItem('token',this.tk.token);
      this.router.navigate(['/login']);
    })
    ,err=>{
      this.toastr.showError("registration failed","Registration status");
    }
  }

  uplimage(event){
    console.log(event.target.files[0]);
    //  this.event.
  }
}
