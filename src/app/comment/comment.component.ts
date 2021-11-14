import { Component, Input, OnInit } from '@angular/core';
import { Commentaire } from '../commentaire';

@Component({
  selector: 'ama-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() com : Commentaire = new Commentaire();

  constructor() { }

  ngOnInit(): void {
  }

}
