import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [routerTransition()]
})
export class AdminComponent implements OnInit {

  // id number
  id : number;
   // Initialize admin
   admins:Array<{idAdmin: number, 
                 nomAdmin: string,
                 password : string,
                 workInterparking : string, 
                 isSuper : boolean}>;

   admin={idAdmin: 0, 
    nomAdmin: '',
    password : '',
    workInterparking : '', 
    isSuper : true}

    
  constructor( public dataService:AdminService, 
    private toastr: ToastrService) {  
    }
    fetchData() {
      this.dataService.listAdmin().subscribe(
        res => {
          this.admins = res.data;
          console.log(this.admins);
        }
      );
    }


ngOnInit() {
  this.dataService.listAdmin().subscribe(
    res => {
      this.admins = res.data;
      console.log(this.admins);
    }
    );
}

 // Delete forms
 deleteClient(id) {
  console.log(id);
      this.dataService.deleteAdmin(id).subscribe(
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
