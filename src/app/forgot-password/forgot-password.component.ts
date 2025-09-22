import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
email : string= ''

constructor(private userService : UserService,private route : Router) {}
  

sendResetToken(){
  this.userService.sendResetToken(this.email).subscribe(
    {
      next : () => {
        this.route.navigate(['reset-password'])
      }
    }
  )




}

}
