import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from '../interface/post';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(Post: Posts): Observable<any> {
    return this.http.post('http://localhost:4000/posts/create', Post);
  }

  getPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>('http://localhost:4000/posts/all', {
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  updatePostById(postID: string, updatedPost: Posts): Observable<Posts> {
    console.log(updatedPost);
    console.log(postID);

    return this.http
      .put<Posts>(
        `http://localhost:3500/products/update/${postID}`,
        updatedPost
      )
      .pipe(
        tap((updatedPost: Posts) => {
          console.log('Product updated on the server:', updatedPost);
        }),
        catchError((error) => {
          console.error('Error updating product on the server:', error);
          return throwError(error);
        })
      );
  }

  getSinglePost(postID: string) {
    console.log(postID);

    return this.http.get(`http://localhost:3500/products/single/${postID}`);
  }

  deletePost(postID: string): Observable<any> {
    return this.http.delete(`http://localhost:3500/products/delete/${postID}`);
  }

  loadPost(postID: string): Observable<any> {
    return this.http.get(`http://localhost:4000/posts/loadposts/${postID}`);
  }
}
