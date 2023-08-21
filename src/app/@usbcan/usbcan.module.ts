import { ModuleWithProviders, NgModule } from '@angular/core';

import { CanService } from './can.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
  })
export class UsbCanModule {
    constructor() {
    }

    static forRoot(): ModuleWithProviders<UsbCanModule> {
        return {
            ngModule: UsbCanModule,
            providers: [
                CanService
            ]
        };
    }
}
