import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'number-1', component: UsersComponent},
  {path:'number-2', component: TodoListComponent, canActivate:[LoginGuard]},
  {path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
