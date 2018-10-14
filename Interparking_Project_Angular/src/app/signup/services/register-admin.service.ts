import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class RegisterAdminService {

  // Variable
  staticToken = "D0F0F42C-8716-4B53-B245-2ECC6BD762C9";

  // Declare Http Client
  constructor(private http: HttpClient) {}
  
  // Add Admin
  addAdmin(admin) {
    return this.http.post('http://interparkingauthentification.azurewebsites.net/api/Admin/ManageAdmin?staticToken=' + this.staticToken , admin);
  }
}
