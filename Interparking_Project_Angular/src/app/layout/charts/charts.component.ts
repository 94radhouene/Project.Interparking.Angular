import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { ChartsService } from './services/charts.service';

@Component({
    selector: 'app-charts',
    templateUrl: './charts.component.html',
    styleUrls: ['./charts.component.scss'],
    animations: [routerTransition()]
})
export class ChartsComponent implements OnInit {

    // List Booking
   bookings:Array<{idBooking: number, 
                   nbrHour: number,
                   dateBooking : string,
                   name : string, 
                   idParking : number, 
                   isActive : boolean,
                bill : Array<any>}>;
    listBokking : any;
    // Varible doughnutChart
    varless2 : number = 0 ;
    varbet210 : number = 0;
    varmor10 : number = 0 ;

    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Payed' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Not Payed' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Less than 2 hour',
        'Between 2 and 10 hours',
        'More than 10 hours'
    ];

    public doughnutChartData: number[] = [0,0,0] ;
    public doughnutChartType: string = 'doughnut';

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string = 'radar';

    // Pie
    public pieChartLabels: string[] = [
        'ok',
        'places out of order',
        'out of order'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string = 'pie';

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean = true;

    public polarAreaChartType: string = 'polarArea';

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Facebook' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Normal' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Gmail' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean = true;
    public lineChartType: string = 'line';

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    public randomize(): void {
        // Only Change 3 values
        const data = [
            Math.round(Math.random() * 100),
            59,
            80,
            Math.random() * 100,
            56,
            Math.random() * 100,
            40
        ];
        const clone = JSON.parse(JSON.stringify(this.barChartData));
        clone[0].data = data;
        this.barChartData = clone;
        /**
         * (My guess), for Angular to recognize the change in the dataset
         * it has to change the dataset variable directly,
         * so one way around it, is to clone the data, change it and then
         * assign it;
         */
    }

    constructor(public dataService:ChartsService) {
         // List listBokking
         this.dataService.listReservation().subscribe(
            res => {
              this.bookings = res.data;
              res.data.forEach(element => {
                if(element.nbrHour <= 2)
                {
                    this.varless2 ++;
                }
                else if(element.nbrHour > 2 && element.nbrHour <= 10)
                {
                    this.varbet210 ++;
                }
                else
                {
                    this.varmor10 ++;
                }
    this.doughnutChartData = [this.varless2, this.varbet210, this.varmor10];
                
            }); 
            console.log(this.varless2);
    console.log(this.varbet210);
    console.log(this.varmor10);
            }
            );
            /* this.onFilldoughnutChart(); */
             
    }

    ngOnInit() {
       

           
    }
}
