import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  
  constructor(
    private authService: AuthService, 
    private router: Router) {
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {
    
      if(this.authService.isLogged){
        return true;
      }
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
