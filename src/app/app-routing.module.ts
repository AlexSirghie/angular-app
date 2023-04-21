import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

const routes: Routes = [
  { path: "employees-list", component: EmployeesListComponent },
  { path: "**", redirectTo: "employees-list" }
];
=======

const routes: Routes = [];
>>>>>>> 4667ae8 (initial commit)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
