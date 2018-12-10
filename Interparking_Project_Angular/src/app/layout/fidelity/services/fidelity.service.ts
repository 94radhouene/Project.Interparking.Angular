import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FidelityService {

  // Variable
  id : number;
  o:any;

  constructor(private http: HttpClient) { }

  // List fidelity
  listfidelity() {
    this.o =  this.http.get<any>('http://promointerparking.azurewebsites.net/api/Fidelity');
    return this.o;
}

 // Delete Fidelity
 deleteFidelity(id) {
  this.o =  this.http.delete('http://promointerparking.azurewebsites.net/api/Fidelity/'+id);
  return this.o;
}
}
