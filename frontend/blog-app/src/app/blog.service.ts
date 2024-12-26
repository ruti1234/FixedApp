import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:5177/api/posts'; 

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error loading posts', error);
        return throwError('Failed to load posts');
      })
    );
  }

  createPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post).pipe(
      catchError(error => {
        console.error('Error creating post', error);
        return throwError('Failed to create post');
      })
    );
  }

  getPostById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        console.error('Error loading post by id', error);
        return throwError('Failed to load post details');
      })
    );
  }
}
