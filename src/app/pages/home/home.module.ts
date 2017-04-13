import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeIntroductionComponent } from './home-introduction/home-introduction.component';
import { RecipesComponent } from './recipes/recipse.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        HomeIntroductionComponent,
        RecipesComponent
    ]
})
export class HomeModule { }