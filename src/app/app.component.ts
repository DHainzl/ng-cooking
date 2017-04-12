import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  authState: FirebaseAuthState = null;

  constructor(
    public af: AngularFire,
    public router: Router
  ) {
    this.af.auth.subscribe(
      state => this.authState = state,
      console.error     // "Error handling"
    );
  }

  login() {
    this.af.auth.login();
  }
  logout() {
    this.af.auth.logout();
    this.router.navigate(['/home']);
  }
}
