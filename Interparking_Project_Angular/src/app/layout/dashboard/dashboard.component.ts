import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {Router} from "@angular/router";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    test = localStorage.getItem('nom');

    constructor(private router: Router) {
        this.sliders.push(
            {
                imagePath: 'assets/images/park1.png',
                label: 'Welcome To Interparking',
                text:
                    'This is one of the largest parking'
            },
            {
                imagePath: 'assets/images/park2.png',
                label: 'Organization',
                text:
                    'We have parking in all europe'
                
            },
            {
                imagePath: 'assets/images/park3.png',
                label: 'Every Where',
                    text: 'In the life of interparking we respect the organization'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Welcome To Interparking Admin Application , you have the right to follow the
                data and progress of interparking`
            },
            {
                id: 2,
                type: 'warning',
                message: `Be careful the are a critical data in this application so you have to take time before 
                delete or update data`
            }
          
        );
        if( this.test === null){
            this.router.navigate(['/login']);
        }
        console.log(this.test);
        console.log('test test');
       
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
