import { Component, OnInit } from '@angular/core';
import { FidelityService } from './services/fidelity.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-fidelity',
  templateUrl: './fidelity.component.html',
  styleUrls: ['./fidelity.component.scss'],
  animations: [routerTransition()]
})
export class FidelityComponent implements OnInit {

  // id number
  id : number;
   // List Fidelity
   fidelitys:Array<{idFidelety: number,
                   price : string, 
                   idParking : number, 
                   subscription : Array<any>}>;
    listFidelity : any;

    
  constructor( public dataService:FidelityService, 
    private toastr: ToastrService) {  
    }
    fetchData() {
      this.dataService.listfidelity().subscribe(
        res => {
          this.fidelitys = res.data;
          console.log(this.fidelitys);
        }
      );
    }


ngOnInit() {
  this.dataService.listfidelity().subscribe(
    res => {
      this.fidelitys = res.data;
      console.log(this.fidelitys);
    }
    );
}

 // Delete forms
 deleteFidelity(id) {
  console.log(id);
      this.dataService.deleteFidelity(id).subscribe(
          res => {
          
              // Condition 0 : success
              if(res.status == 0){
                this.toastr.success(res.message);
                this.fetchData();
              }
              else{
                this.toastr.error(res.message);
              }
           
            ;
          }
      );
}




}
