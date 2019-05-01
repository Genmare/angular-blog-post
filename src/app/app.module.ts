import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';

// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// // the second parameter 'fr' is optional
// registerLocaleData(localeFr, 'fr');


@NgModule({
    declarations: [
        AppComponent,
        PostListComponent,
        PostListItemComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
