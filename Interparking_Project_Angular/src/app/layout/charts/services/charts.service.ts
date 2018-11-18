import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  // Variable
  staticToken = "D0F0F42C-8716-4B53-B245-2ECC6BD762C9";
  id : string;
  o:any;

  constructor(private http: HttpClient) { }

  // List Reservation
  listReservation() {
    this.o =  this.http.get<any>('http://bookinginterparking.azurewebsites.net/api/Booking');
    return this.o;
}

}

