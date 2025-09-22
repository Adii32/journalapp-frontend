import { Component, NgModule } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singup-user',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './singup-user.component.html',
  styleUrl: './singup-user.component.css'
})
export class SingupUserComponent {
user : User = new User();
selectedFile ? : File;
constructor(private userService : UserService,private route : Router){}
selectedFileInput(event : any){
const ele = event.currentTarget as HTMLInputElement
if(ele.files && ele.files.length>0){
  this.selectedFile = event.target.files[0]
}
}
onSubmit(){
  const userData = new FormData()
  userData.append("userName",this.user.userName)
  userData.append("email",this.user.email)
  userData.append("password", this.user.password)
  userData.append("sentimentAnalysis",String(this.user.sentimentAnalysis))
  if(this.selectedFile){
    userData.append('imageFile',this.selectedFile,this.selectedFile.name)
  }
  this.processData(userData)
}
processData(userData : FormData){
  this.userService.signupUser(userData).subscribe(data=>{
    console.log(data)
    this.backTohome()
  })
}
backTohome(){
this.route.navigate(["/login"])
}
loginRoute(){
  this.route.navigate(['/login'])
}
}
