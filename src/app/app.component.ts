import { Component } from '@angular/core';

import { Post } from './post';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Posts';
    post1 = new Post(
        'Mon premier post',
        'Nulla elit non in aute exercitation consectetur elit excepteur quis sint. Consectetur proident incididunt veniam consequat est ipsum ad aliquip. Ea ut magna laborum mollit.',
        1
    );
    post2 = new Post('Mon deuxième post',
        'Consequat consequat occaecat sunt nisi id est voluptate velit consectetur laborum velit culpa. Voluptate eiusmod ipsum ea pariatur culpa deserunt sit excepteur eu voluptate eiusmod nostrud aute. Eiusmod ex eiusmod duis ex laborum esse anim esse tempor cupidatat labore sit. Occaecat sit sunt do ut commodo. Aute sit occaecat exercitation pariatur consectetur ut enim occaecat nisi elit velit.',
        -1
    );
    post3 = new Post('Encore un post',
        'Ex excepteur sunt sit cillum culpa non incididunt reprehenderit. Non minim do laboris consectetur esse laboris nisi. Cillum deserunt cillum excepteur laborum id aliquip fugiat elit qui fugiat qui. Aliquip nisi magna officia cillum amet magna elit. Quis Lorem eiusmod aliquip voluptate est officia tempor. Nulla tempor eiusmod do sit ex sit elit eiusmod consequat. Eiusmod dolor ad adipisicing et veniam sint qui dolor sunt tempor sunt culpa.',
        0
    );

    postArray = [this.post1, this.post2, this.post3];

    constructor() {
    }

}
