import { Component, Input } from '@angular/core';

import { MenuItem } from './menu-item.interface';

@Component({
    selector: 'page-with-menu',
    templateUrl: './page-with-menu.component.html',
    styleUrls: [ './page-with-menu.component.scss' ]
})
export class PageWithMenu {
    @Input()
    menu: MenuItem[][] = [];
}