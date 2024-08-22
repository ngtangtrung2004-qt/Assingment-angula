import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Inject } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { jwtDecode } from "jwt-decode";


export const canActivateAuthor: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
) => {
    const role = route.data['role'];
    const token = localStorage.getItem('token');
    // decode the token to get its payload
    let tokenPayload:any;
    if(token){
    tokenPayload = jwtDecode(token);
    }
    if (!tokenPayload.role === role) {
        Inject(Router).navigate(['/login']);
    return false;
    }
    return true;
};

//jwtHelper.isTokenExpired(token); trả về false nếu còn hiệu lực trả về true nếu hết hiệu lực 
