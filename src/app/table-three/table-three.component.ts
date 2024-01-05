import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-table-three',
  templateUrl: './table-three.component.html',
  styleUrls: ['./table-three.component.css']
})
export class TableThreeComponent implements OnInit {
  result: any;
  constructor(private emp:EmployeeService){}
  ngOnInit(): void {
    this.getEmplyeeList();
  }
  getEmplyeeList(){
    this.emp.employeeList()
    .subscribe(
     (res) => {
       this.result=res;
       console.log(res)
     
     // error:() => {
     //   alert("error in fetching data")
     // }
    })
   }
}
