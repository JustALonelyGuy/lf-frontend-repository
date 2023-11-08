import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../user/user.service";

@Injectable()
export class LoginGuard implements CanActivate{

  constructor(private userService:UserService,private router:Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.userService.getToken()){
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }

}
