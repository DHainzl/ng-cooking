import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add services here
import { AuthGuard } from './services/auth-guard.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        // Add services here
        AuthGuard
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
        }
    }
}