import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostServiceService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<{ success: boolean; message: string; posts: Post[] }>(
      'http://localhost:3000/api/posts'
    );
  }

  savePost(postBody: Post) {
    return this.http.post<{ success: boolean; message: string; post: Post }>(
      'http://localhost:3000/api/create-post',
      postBody
    );
  }
  updatePost(postBody: Post, id: string) {
    return this.http.put<{ success: boolean; message: string; post: Post }>(
      'http://localhost:3000/api/post/' + id,
      postBody
    );
  }

  deletePost(id: string) {
    return this.http.delete<{ success: boolean; message: string; post: Post }>(
      'http://localhost:3000/api/post/' + id
    );
  }
}
