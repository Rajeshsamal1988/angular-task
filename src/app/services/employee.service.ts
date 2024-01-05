import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
url='http://localhost:3000/Employees';
  constructor(private http:HttpClient) { }


  employeeList(){
    return this.http.get<any>("http://localhost:3000/Employees");

  }

  getEmployeeByCode(id: any){
  // return this.http.get<any>("http://localhost:3000/Employees");
      return this.http.get(`${this.url}/?id=${id}`);
  }
  upDateEmployeeData(id:any,data:any){
   return this.http.patch(`${this.url}/${id}`,data)
  // return this.http.put("http://localhost:3000/Employees/",data)
  }
}
