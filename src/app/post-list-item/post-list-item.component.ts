import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../model/post';
import { PostService } from '../service/post.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-post-list-item',
    templateUrl: './post-list-item.component.html',
    styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

    @Input() post: Post;
    @Input() num: number;

    postSubscription: Subscription;

    constructor(private postService: PostService) { }

    ngOnInit() { }

    onAime(val: boolean) {
        this.postService.loveIts(this.num, val);
    }

    onDeletePost() {
        this.postService.removePost(this.num);
    }
}
