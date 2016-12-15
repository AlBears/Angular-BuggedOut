import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusPipe } from './pipe/custom.pipe';
import { SeverityPipe } from './pipe/severity.pipe';

@NgModule({
    imports: [ CommonModule ],
    exports: [ CommonModule, StatusPipe, SeverityPipe ],
    declarations: [ StatusPipe, SeverityPipe ]
})
export class SharedModule { }
