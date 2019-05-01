import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../post';


@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() post: Post;

    constructor() { }

    ngOnInit() {
    }

    onAime(val: boolean) {
      if (val === true) {
          this.post.loveIts++;
      } else {
          this.post.loveIts--;
      }
    }

}
