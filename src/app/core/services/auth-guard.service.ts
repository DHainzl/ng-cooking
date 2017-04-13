import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import 'rxjs/add/operator/map';

import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private af: AngularFire
    ) { }
    canActivate() {
        return this.af.auth.map(auth => auth != null);
    }
}