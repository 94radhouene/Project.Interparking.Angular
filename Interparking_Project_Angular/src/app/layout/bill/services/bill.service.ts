import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  // Variable
  id : number;
  o:any;

  constructor(private http: HttpClient) { }

  // List Bill
  listBill() {
    this.o =  this.http.get<any>('http://bookinginterparking.azurewebsites.net/api/Finance');
    return this.o;
}

}

