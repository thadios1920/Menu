import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'ama-listemployes',
  templateUrl: './listemployes.component.html',
  styleUrls: ['./listemployes.component.css']
})
export class ListemployesComponent implements OnInit {
 tabE:Employe [] =[];

  constructor(private employesevice : EmployeService) { }

  ngOnInit(): void {
    this.tabE = this.employesevice.getEmployes();
    
  }

}
