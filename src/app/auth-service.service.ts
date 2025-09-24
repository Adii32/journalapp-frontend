import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getUserIdFromToken(): number {
    const token = localStorage.getItem('jwtToken');
    if (!token) 
    {
      return 0;
    }

    const decoded: any = jwtDecode(token);
    console.log('decoded',decoded)
    return decoded.userId ||  decoded.id || 0; 
  }
}
