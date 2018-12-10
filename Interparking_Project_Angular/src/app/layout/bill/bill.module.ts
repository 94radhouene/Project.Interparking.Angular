import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillRoutingModule } from './bill-routing.module';
import { BillComponent } from './bill.component';
import { PageHeaderModule } from '../../shared';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [CommonModule, BillRoutingModule,  PageHeaderModule,  HttpClientModule],
    declarations: [BillComponent]
})
export class BillModule {}

   