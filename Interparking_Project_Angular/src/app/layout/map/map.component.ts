import { Component, OnInit } from '@angular/core';
import { MapService } from './services/map.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  animations: [routerTransition()]
})
export class MapComponent implements OnInit {

   // Initialize map
   allMaps:Array<{parkingId : number,
     latField: number,
   lonField : number}>;

   // Initialize varible
   title: string = 'My first AGM project';
   maps:any;
  

  constructor( public dataService:MapService, 
    private toastr: ToastrService) {
      
    
        /* this.fillMaps(); */
    }

  ngOnInit() {
    this.dataService.listMap().subscribe(
      res => {
        this.allMaps = res.data;
        console.log(this.allMaps);
    
    });
    
  
  }

}
