import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './map.component';
import { PageHeaderModule } from '../../shared';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [CommonModule, MapRoutingModule, AgmCoreModule, AgGridModule.withComponents(null), PageHeaderModule,  HttpClientModule],
  declarations: [MapComponent]
})
export class MapModule { }
