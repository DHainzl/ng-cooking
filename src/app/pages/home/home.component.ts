import { Component } from '@angular/core';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { MenuItem } from '../../shared/components/page-with-menu/menu-item.interface';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ]
})
export class HomeComponent {
    menu: MenuItem[][] = [
        [
            { url: 'info', name: 'Home'}
        ],
        [
            { url: 'recipes', name: 'Recipes' }
        ]
    ];
    
    items: FirebaseListObservable<any[]>;

    constructor(af: AngularFire) {
        this.items = af.database.list('/items');
    }
}