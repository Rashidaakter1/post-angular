import { Component, EventEmitter, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-post-create',
  imports: [
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    NgIf,
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css',
  standalone: true,
})
export class PostCreateComponent {
  title: string = '';
  content: string = '';

  @Output()
  postCreated = new EventEmitter();
  postForm: any;

  addPost(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const postDetails = {
      postTitle: form.value.title,
      postContent: form.value.content,
    };
    console.log(postDetails);
    this.postCreated.emit(postDetails);
  }
}
