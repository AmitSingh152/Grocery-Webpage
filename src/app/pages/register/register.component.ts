import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }
  onRegisterClick(data:any){
    this.auth.registerData(data).subscribe(response=>{
      console.log(response)
    })
  }
  ngOnInit(): void {
  }

}
