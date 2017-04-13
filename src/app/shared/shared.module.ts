import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PageWithMenu } from './components/page-with-menu/page-with-menu.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        // Add stuff
        PageWithMenu
    ],
    exports: [
        // Add stuff
        PageWithMenu,

        // Re-export common modules
        CommonModule,
        FormsModule
    ]
})
export class SharedModule { }