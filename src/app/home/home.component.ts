import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Route, Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
user : User | null = null;
constructor(private userService : UserService,private router : Router){}
ngOnInit() : void{
  this.userService.getCurrentUser().subscribe({
    next : (data) => {
      this.user = data
    },error : (error)=> {
      console.log(error)
    }
  })
}
createJournal(){
  this.router.navigate(['/create-journal'])
}
}
