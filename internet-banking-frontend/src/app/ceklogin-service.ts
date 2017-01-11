import { Injectable }     from '@angular/core';
import { CanActivate , Router}    from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService, private router: Router){ }

  canActivate() {
      console.log('Sudah login ? '+this.authService.sudahLogin());
        if(this.authService.sudahLogin()) {
          return true;
      }
    this.router.navigate(['/login']);
    return false;
  }

  canActivateChild() {
      return this.canActivate();
  }
}
