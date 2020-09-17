import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myproj1';

  constructor(private authser:AuthService,private router:Router){
  }

  status:boolean=true;
  returnLogin(){
    this.status=false;
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
