import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLinkActive, RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private route : Router){}
login(){
  return !!localStorage.getItem('jwtToken')
}
logout(){
  localStorage.removeItem('jwtToken')
  this.route.navigate(['/login'])
}
showJournals(){
  this.route.navigate(['/show-journal'])
}
}
