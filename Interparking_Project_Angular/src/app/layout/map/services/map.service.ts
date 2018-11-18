import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  // Variable
  staticToken = "D0F0F42C-8716-4B53-B245-2ECC6BD762C9";
  id : string;
  o:any;

  constructor(private http: HttpClient) { }

  // List Map
  listMap() {
    this.o =  this.http.get<any>('http://mapinterparking.azurewebsites.net/api/Client/ListMap');
    return this.o;
}

}

