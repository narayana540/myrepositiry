import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData={};
  tk:any;
  // resData: Object;
  constructor(private ser:AuthService,private router:Router) { }
 
  ngOnInit(): void {
  }

  registerUser(){
    // console.log(this.registerUserData);
    
    this.ser.registerUserSer(this.registerUserData).subscribe(res=>{
this.tk=res;
      console.log(this.tk);
      localStorage.setItem('token',this.tk.token);
      this.router.navigate(['/login']);
    })
  }
}
