import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable } from 'rxjs';
import { Post } from '../state/posts.state';
import { getPosts } from '../state/posts.selectors';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>

  constructor(private store: Store<AppState>) {
    this.posts$ = this.store.select(getPosts)
  }

  ngOnInit(): void {

  }

}
