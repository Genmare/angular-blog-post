import { Injectable } from '@angular/core';

import { Post } from '../model/post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    // post1 = new Post(
    //     'Mon premier post',
    //     'Nulla elit non in aute exercitation consectetur elit excepteur quis sint. Consectetur proident incididunt veniam consequat est ipsum ad aliquip. Ea ut magna laborum mollit.',
    //     1
    // );
    // post2 = new Post('Mon deuxième post',
    //     'Consequat consequat occaecat sunt nisi id est voluptate velit consectetur laborum velit culpa. Voluptate eiusmod ipsum ea pariatur culpa deserunt sit excepteur eu voluptate eiusmod nostrud aute. Eiusmod ex eiusmod duis ex laborum esse anim esse tempor cupidatat labore sit. Occaecat sit sunt do ut commodo. Aute sit occaecat exercitation pariatur consectetur ut enim occaecat nisi elit velit.',
    //     -1
    // );
    // post3 = new Post('Encore un post',
    //     'Ex excepteur sunt sit cillum culpa non incididunt reprehenderit. Non minim do laboris consectetur esse laboris nisi. Cillum deserunt cillum excepteur laborum id aliquip fugiat elit qui fugiat qui. Aliquip nisi magna officia cillum amet magna elit. Quis Lorem eiusmod aliquip voluptate est officia tempor. Nulla tempor eiusmod do sit ex sit elit eiusmod consequat. Eiusmod dolor ad adipisicing et veniam sint qui dolor sunt tempor sunt culpa.',
    //     0
    // );

    // private posts = [this.post1, this.post2, this.post3];
    private posts: Post[] = [];

    postSubject = new Subject<Post[]>();

    constructor(public httpClient: HttpClient) { 
        this.getPostsFromServer();
        this.sort();
        this.emitPostSubject();
    }

    emitPostSubject() {
        this.postSubject.next(this.posts.slice());
    }

    savePostsToServer() {
        this.httpClient
            .put('https://httpclient-demo-genmare.firebaseio.com/posts.json', this.posts)
            .subscribe(
                () => {
                    console.log('Enregistrement terminé !');
                },
                (error) => {
                    console.log('Erreur ! : ' + error);
                }
            );
    }

    getPostsFromServer() {
        this.httpClient
            .get<Post[]>('https://httpclient-demo-genmare.firebaseio.com/posts.json')
            .subscribe(
                (response) => {
                    this.posts = response;
                    this.posts.forEach(
                        (post: Post) => {
                            // post.formatDate();
                            post.createdAt = new Date(post.createdAt);
                        }
                    );
                    this.emitPostSubject();
                },
                (error) => {
                    console.log('Erreur ! : ' + error);
                }
            );
    }

    loveIts(i: number, val: boolean) {
        if (val === true) {
            this.posts[i].loveIts++;
        } else {
            this.posts[i].loveIts--;
        }
        this.emitPostSubject();
        this.savePostsToServer();
    }

    addPost(post: Post) {
        this.posts.push(post);
        this.sort();
        this.emitPostSubject();
        this.savePostsToServer();
    }

    removePost(i: number) {
        this.posts.splice(i, 1);
        this.sort();
        this.emitPostSubject();
        this.savePostsToServer();
    }

    sort() {
        this.posts.sort(
            (post1: Post, post2: Post) => {
                return post2.createdAt.getTime() - post1.createdAt.getTime();
            }
        );
    }
}
