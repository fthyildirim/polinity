import { AccountService } from './../account.service';
import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from 'rxjs';


@Injectable()

export class LoginGuard implements CanActivate {
    constructor(private accountService:AccountService, private route:Router) {}

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean | any{
        let logged  = this.accountService.isLoggedIn();
        if (logged) {
            return true;
        }
        this.route.navigate(["login"]);
        return false;
    }
    
}