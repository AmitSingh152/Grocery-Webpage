import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginclass=''
  responseText=''

  constructor(private auth:AuthService,private route:Router) { }

  onLoginClick(data:any){
    this.auth.loginData(data).subscribe((response:any)=>{
      this.responseText='Welcome '+(response.user.firstName)
      this.loginclass='alert-success'
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user))
      this.route.navigateByUrl('')
    },(error:any)=>{
      this.responseText='Login Failed. Try again.'
      this.loginclass='alert-danger'
      console.log('Error found')
    })
  }
  ngOnInit(): void {
  }

}
