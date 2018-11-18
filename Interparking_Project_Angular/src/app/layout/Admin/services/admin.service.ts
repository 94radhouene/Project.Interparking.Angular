import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // Variable
  staticToken = "D0F0F42C-8716-4B53-B245-2ECC6BD762C9";
  id : string;
  o:any;

  constructor(private http: HttpClient) { }

  // List Admin
  listAdmin() {
    this.o =  this.http.get<any>('http://authentificationinterparking.azurewebsites.net/api/Admin/ManageAdmin?staticToken='+ this.staticToken );
    return this.o;
}

 // Delete Admin
 deleteAdmin(id) {
  this.o =  this.http.delete('http://authentificationinterparking.azurewebsites.net/api/Admin/ManageAdmin/'+ id +'?staticToken='+ this.staticToken );
  return this.o;
}
}
