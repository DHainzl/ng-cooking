import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/services/auth-guard.service';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', loadChildren: 'app/pages/home/home.module#HomeModule' },
    { path: 'settings', loadChildren: 'app/pages/settings/settings.module#SettingsModule', canActivate: [ AuthGuard ] }
    // TODO 404
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }