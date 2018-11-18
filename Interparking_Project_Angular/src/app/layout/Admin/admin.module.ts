import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { PageHeaderModule } from '../../shared';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, AgGridModule.withComponents(null), PageHeaderModule,  HttpClientModule],
  declarations: [AdminComponent]
})
export class AdminModule { }
