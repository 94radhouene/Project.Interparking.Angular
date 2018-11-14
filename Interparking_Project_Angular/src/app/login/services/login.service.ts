import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  // Variable
  staticToken = "D0F0F42C-8716-4B53-B245-2ECC6BD762C9";
  o:any;

  // Declare Http Client
  constructor(private http: HttpClient) {}
  
  // Add Admin
  loginadmin(admin) {
    this.o =  this.http.post<any>('http://authentificationinterparking.azurewebsites.net/api/SignInAdmin?staticToken=' + this.staticToken , admin);
    return this.o;
  }
}
