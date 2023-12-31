import { Injectable } from '@angular/core';
import { User, UserDetails, updatedUserData } from '../interface/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Posts } from '../interface/post';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:4000/users/checkUserDetails/';
  userID!: UserDetails;

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUsers(): Observable<User[]> {
    const token = localStorage.getItem('token') as string;
    return this.http.get<User[]>('http://localhost:4000/users/all', {
      headers: {
        'Content-type': 'application/json',
        token: token,
      },
    });
  }

  checkDetails(): Observable<User> {
    const token = localStorage.getItem('token') || '';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token,
    });

    return this.http
      .get<any>(this.apiUrl, { headers })
      .pipe(map((data) => data.info));
  }

  updateUserById(updatedUser: updatedUserData): Observable<any> {
    return this.authService.getUserDetails().pipe(
      switchMap((user) => {
        console.log(user[0].userID);
        let userID = user[0].userID;
        const token = localStorage.getItem('token') || '';
        console.log(token);

        const url = `http://localhost:3500/users/update/${userID}`;

        const headers = new HttpHeaders({
          'Content-Type': 'application/json',
          token: token,
        });

        return this.http.put(url, updatedUser, { headers });
      })
    );
  }

  deleteUser(userID: string): Observable<any> {
    return this.http.delete(`http://localhost:4000/users/delete/${userID}`);
  }

  getProducts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('http://localhost:4000/posts/all', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  initializePasswordReset(user: User) {
    this.http
      .post('http://localhost:4000/users/initiate-password-reset/', user)
      .subscribe((res) => {
        return res;
      });
  }

  resetPassword(user: User) {
    this.http
      .post('http://localhost:4000/users/reset-password/', user)
      .subscribe((res) => {
        return res;
      });
  }
}
