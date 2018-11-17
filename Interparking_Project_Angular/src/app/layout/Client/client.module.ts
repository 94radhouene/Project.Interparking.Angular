import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { PageHeaderModule } from '../../shared';

@NgModule({
    imports: [CommonModule,  ClientRoutingModule, PageHeaderModule],
    declarations: [ClientComponent]
})
export class ClientModule {}
