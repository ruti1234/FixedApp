
import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog',
  template: `
    <ul>
      <li *ngFor="let post of posts" (click)="loadPostDetails(post.id)">
        {{ post.title }}
      </li>
    </ul>
    <div *ngIf="postDetails">
      <h2>{{ postDetails.title }}</h2>
      <p>{{ postDetails.description }}</p>
    </div>
    <h1>Create New Post</h1>
    <form (submit)="createPost()">
      <label>Title: </label>
      <input [(ngModel)]="newPost.title">
      <label>Description: </label>
      <input [(ngModel)]="newPost.description">
      <label>Content: </label>
      <textarea [(ngModel)]="newPost.content"></textarea>
      <button type="submit">Submit</button>
    </form>
  `,
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  postDetails: any = null;
  newPost: any = {};
  constructor(private blogService: BlogService) {}

  ngOnInit() {
  
    this.blogService.getPosts().subscribe(
      posts => {
        this.posts = posts;
      },
      error => {
        console.error('Failed to load posts', error);
      }
    );
  }
  createPost(): void {
   
    this.blogService.createPost( this.newPost).subscribe();
  }
  loadPostDetails(id: number) {
   
    this.blogService.getPostById(id).subscribe(post => {
      this.blogService.getPosts().subscribe(allPosts => {
        this.postDetails = {
          ...post,
          totalPosts: allPosts.length,
        };
      });
    });
  }
}
