import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // Variable
  staticToken = "D0F0F42C-8716-4B53-B245-2ECC6BD762C9";
  id : number;
  o:any;

  constructor(private http: HttpClient) { }

  // List Client
  listClient() {
    this.o =  this.http.get<any>('http://authentificationinterparking.azurewebsites.net/api/Admin/ManageClient?staticToken='+ this.staticToken );
    return this.o;
}

 // Delete Client
 deleteClient(id) {
  this.o =  this.http.delete('http://authentificationinterparking.azurewebsites.net/api/Admin/ManageClient/'+ id +'?staticToken='+ this.staticToken );
  return this.o;
}
}
