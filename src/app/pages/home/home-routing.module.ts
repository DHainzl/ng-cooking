import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { HomeIntroductionComponent } from './home-introduction/home-introduction.component';
import { RecipesComponent } from './recipes/recipse.component';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
        children: [
            { path: 'info', component: HomeIntroductionComponent, pathMatch: 'full' },
            { path: 'recipes', component: RecipesComponent },
            { path: '**', redirectTo: 'info' }
        ]
    },
    { path: '**', redirectTo: 'info' }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule { }