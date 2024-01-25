import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interface/post';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:4000/posts/all';

  constructor(private http: HttpClient) {}

  createPost(postData: any): Observable<any> {
    return this.http.post('http://localhost:4000/posts/create', postData);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  updatePostById(postID: string, updatedPost: Posts): Observable<Posts> {
    console.log(updatedPost);
    console.log(postID);

    return this.http
      .put<Posts>(`http://localhost:4000/posts/update/${postID}`, updatedPost)
      .pipe(
        tap((updatedPost: Posts) => {
          console.log('Post updated on the server:', updatedPost);
        }),
        catchError((error) => {
          console.error('Error updating product on the server:', error);
          return throwError(error);
        })
      );
  }

  getSinglePost(postID: string) {
    console.log(postID);

    return this.http.get(`http://localhost:4000/posts/single/${postID}`);
  }

  deletePost(postID: string): Observable<any> {
    return this.http.delete(`http://localhost:4000/posts/delete/${postID}`);
  }

  loadPost(postID: string): Observable<any> {
    return this.http.get(`http://localhost:4000/posts/loadposts/${postID}`);
  }
}
