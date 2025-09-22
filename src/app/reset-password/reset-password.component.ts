import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
token : string = '';
newPassword : string = '';
error : string = '';
message : string = ''
constructor(private userService : UserService,private route : Router){}
resetPassword(){
this.error = ''
this.message = ''
  this.userService.resetToken(this.token,this.newPassword).subscribe({
    next : (res) => {
      this.message = res
      this.newPassword = ''
      this.token = ''
      setTimeout(() => setTimeout,1500)
    },
    error : (err)=>{
      this.error = "error while reseting password"
      console.log(err)
    }
  })
}
goLogin(){
  this.route.navigate(['login'])
}
}
