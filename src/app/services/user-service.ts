import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserCredntials } from '../sign-in/user.model';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private user: BehaviorSubject<IUser | null>;

  constructor(private http: HttpClient) {
    this.user = new BehaviorSubject<IUser | null>(null);
  };

  getUser(): Observable<IUser | null> {
    return this.user;
  }

  signIn(credentials: IUserCredntials): Observable<IUser> {
    return this.http
    .post<IUser>('/api/sign-in', credentials)
    .pipe(
      map((user: IUser) => {
        this.user.next(user);
        return user;
    }));
  }

  singOut(): void { 
    this.user.next(null); 
  }  

}