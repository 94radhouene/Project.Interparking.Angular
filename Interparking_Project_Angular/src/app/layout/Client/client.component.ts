import { Component, OnInit } from '@angular/core';
import { ClientService } from './services/client.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
  animations: [routerTransition()]
})
export class ClientComponent implements OnInit {

  // id string
  id : string;
   // Initialize admin
   admins:Array<{iduser: number, 
                 userName: string,
                 password : string,
                 email : string, 
                 isFacebook : boolean, 
                 fullName : string,
                 adress : string,
                 tel : number}>;

   admin={iduser: 0, 
    userName: '',
    password : '',
    email : '', 
    fullName : '',
    adress : '',
    tel : 0}

    
  constructor( public dataService:ClientService, 
    private toastr: ToastrService) {  
    }
    fetchData() {
      this.dataService.listClient().subscribe(
        res => {
          this.admins = res.data;
          console.log(this.admins);
        }
      );
    }


ngOnInit() {
  this.dataService.listClient().subscribe(
    res => {
      this.admins = res.data;
      console.log(this.admins);
    }
    );
}

 // Delete forms
 deleteClient(id) {
  console.log(id);
      this.dataService.deleteClient(id).subscribe(
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
