import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { EmployeeService } from '../services/employee.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empData: any;
  idf: any;
  // result:any;
  constructor(private emp: EmployeeService, private router: ActivatedRoute,private rout: Router) { }

  editEmp = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    emailAddress: new FormControl(''),
    jobTitleName: new FormControl(''),
    preferredFullName: new FormControl(''),
    employeeCode: new FormControl(''),
    region: new FormControl(''),
    phoneNumber: new FormControl(''),
  
  })
  message: boolean = false;
  ngOnInit(): void {
    console.log("data:-", this.router.snapshot.params['id']);
    const id = this.router.snapshot.params['id']
    this.idf = this.router.snapshot.params['idf']
    console.log("id :", id)
    console.log("idf :", this.idf)
    this.emp.getEmployeeByCode(this.router.snapshot.params['id']).subscribe((result: any) => {
      console.log("result1*****", result)
      // let employee = result.filter((eCode: any) => {
      //   return eCode.employeeCode === this.router.snapshot.params['employeeCode'];
      // })
      // console.log("employee", employee)
      let employee = result[0];
      console.log("employee", employee)

      this.editEmp = new FormGroup({
        firstName: new FormControl(employee['firstName']),
        lastName: new FormControl(employee['lastName']),
        emailAddress: new FormControl(employee['emailAddress']),
        jobTitleName: new FormControl(employee['jobTitleName']),
        preferredFullName: new FormControl(employee['preferredFullName']),
        employeeCode: new FormControl(employee['employeeCode']),
        region: new FormControl(employee['region']),
        phoneNumber: new FormControl(employee['phoneNumber']),
  
      })
    })


  }

  updateData() {
    console.log("cccccc", this.editEmp.value)
    // let data = {
    //   // "firstName": this.editEmp.value.fname,
    //   // "lastName": this.editEmp.value.lname,
    //   // "emailAddress": this.editEmp.value.email
    // }
    // console.log("cccccc", data)

    this.emp.upDateEmployeeData(this.router.snapshot.params['id'], this.editEmp.value).
      subscribe((result) => {
        console.log(result);
        this.message = true;
        this.rout.navigate(['/']);
      
      })
  }
  removeMessage() {
    this.message = false;
  }

}
