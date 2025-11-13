import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { IUser } from './sign-in/user.model';
import { UserService } from './services/user-service';

@Component({
  selector: 'app-root',
  standalone: true, // <-- важно
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('gen-jewerly');

  menuOpen = false;
  user: IUser | null = null;
  showSignOutMenu: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.getUser().subscribe({
        next: (user) => this.user = user
      });
    }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  
  toggleSignOutMenu(): void {
    this.showSignOutMenu = !this.showSignOutMenu;
  }

  signOut(): void {
    this.userService.singOut();
    this.showSignOutMenu = false;
  }
}