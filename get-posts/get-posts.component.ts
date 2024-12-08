import { Component, Input, signal } from '@angular/core';

import { MatExpansionModule } from '@angular/material/expansion';
import { Post } from '../post.model';

@Component({
  selector: 'app-get-posts',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.css'],
})
export class GetPostsComponent {
  readonly panelOpenState = signal(false);
  @Input()
  posts: Post[] | undefined;
}
