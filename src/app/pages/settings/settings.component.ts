import { Component } from '@angular/core';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

@Component({
    templateUrl: './settings.component.html',
    styleUrls: [ './settings.component.scss' ]
})
export class SettingsComponent {
    authState: FirebaseAuthState = null;

    constructor(
        private af: AngularFire
    ) {
        this.af.auth.subscribe(
            auth => this.authState = auth
        );
    }
}