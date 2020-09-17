import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData={};
tk:any;
  constructor(private ser:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
             

  loginUser(){

    console.log(this.loginUserData);
     this.ser.loginUserSer(this.loginUserData).subscribe(res=>{
       this.tk=res
       console.log(this.tk);
       localStorage.setItem('token',this.tk.token);
       this.router.navigate(['/events'])
     })
  }
}
