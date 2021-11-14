import { Component, OnInit } from '@angular/core';
import { Employe } from '../employe';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'ama-supemploye',
  templateUrl: './supemploye.component.html',
  styleUrls: ['./supemploye.component.css']
})
export class SupemployeComponent implements OnInit {
  tabES:Employe [] =[];


  constructor(private employesevice : EmployeService) { }

  ngOnInit(): void {
    this.tabES = this.employesevice.getEmployes();
  }
  effacer(){
    this.employesevice.deleteFirstEmploye();
  }

}
