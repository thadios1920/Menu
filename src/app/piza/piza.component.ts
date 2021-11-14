import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'ama-piza',
  templateUrl: './piza.component.html',
  styleUrls: ['./piza.component.css']
})
export class PizaComponent implements OnInit {

  constructor() { }

  display:boolean =false;
  onAffiche(){
    this.display = !this.display;
  }
  @Input() p: Pizza = new Pizza();
  ngOnInit(): void {
  }

}
