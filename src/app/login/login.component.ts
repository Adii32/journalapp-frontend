import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
user = {userName : '', password : ''}
errorMessage : string = ''
constructor(private userService : UserService , private route : Router){}
onSubmit(){
  this.userService.loginUser(this.user.userName,this.user.password).subscribe({
    next : (jwt) => {
  localStorage.setItem('jwtToken',String(jwt))
      this.route.navigate(['/'])
      console.log(jwt)
    },
    error : (error) =>{
      this.errorMessage = "invalid email and password"
      console.log(error)
    }  })
}
register(){
  this.route.navigate(['/register'])
}
}
