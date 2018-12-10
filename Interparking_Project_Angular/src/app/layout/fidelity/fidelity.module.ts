import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FidelityRoutingModule } from './fidelity-routing.module';
import { FidelityComponent } from './fidelity.component';
import { PageHeaderModule } from '../../shared';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, FidelityRoutingModule, AgGridModule.withComponents(null), PageHeaderModule,  HttpClientModule],
  declarations: [FidelityComponent]
})
export class FidelityModule { }
