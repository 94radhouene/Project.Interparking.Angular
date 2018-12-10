import { Component, OnInit } from '@angular/core';
import { BillService } from './services/bill.service';
import { ToastrService } from 'ngx-toastr';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
  animations: [routerTransition()]
})
export class BillComponent implements OnInit {

  // id number
  id : number;
   // List bills
   bills:Array<{idBill: number,
                   price : string, 
                   nbrHour : number, 
                   idBooking: number,
                   dateBill : Date, 
                   payed : boolean, 
                   idBookingNavigation : Array<{idBooking: number,
                    nbrHour : number, 
                    dateBooking : Date,
                    name : string, 
                    idParking : number,
                    isActive : boolean,
                    bill : Array<any>}>,
                   historical : Array<any>}>;
    listFidelity : any;

    
  constructor( public dataService:BillService, 
    private toastr: ToastrService) {  
    }
    fetchData() {
      this.dataService.listBill().subscribe(
        res => {
          this.bills = res.data;
          console.log(this.bills);
        }
      );
    }


ngOnInit() {
  this.dataService.listBill().subscribe(
    res => {
      this.bills = res.data;
      console.log(this.bills);
    }
    );
}

 




}
