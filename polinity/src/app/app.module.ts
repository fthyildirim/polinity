import { AccountService } from './account.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginComponent } from './login/login.component'; 
import { LoginGuard } from './login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TodoListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [AccountService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
