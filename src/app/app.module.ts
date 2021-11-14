import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListPizaComponent } from './list-piza/list-piza.component';
import { PizaComponent } from './piza/piza.component';
import { CommentComponent } from './comment/comment.component';
import { ListemployesComponent } from './listemployes/listemployes.component';
import { SupemployeComponent } from './supemploye/supemploye.component';

@NgModule({
  declarations: [
    AppComponent,
    ListPizaComponent,
    PizaComponent,
    CommentComponent,
    ListemployesComponent,
    SupemployeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
