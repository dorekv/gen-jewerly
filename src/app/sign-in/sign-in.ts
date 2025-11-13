import { Component } from '@angular/core';
import { IUser, IUserCredntials } from './user.model';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIn {
  signInError: boolean = false;

  credentials: IUserCredntials = {
    email: '',
    password: ''
  };

  user: IUser | null = null;
  constructor(private userService: UserService, private router: Router) {
  }

  signIn(): void {
    this.signInError = false;

    this.userService.signIn(this.credentials).subscribe({
      next: () => ( this.router.navigate(['/catalog']) ),
      error: () => ( this.signInError = true )
    });    
    
    console.log('Signing in with', this.credentials);
  }

}
