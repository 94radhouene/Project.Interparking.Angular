import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { PageHeaderModule } from '../../shared';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, ClientRoutingModule, AgGridModule.withComponents(null), PageHeaderModule,  HttpClientModule],
    declarations: [ClientComponent]
})
export class ClientModule {}

   