import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {
  chart = [];
  constructor() { }

  ngOnInit() {
  }
  public lineChartData:Array<any> = [
    {data: [1,1,1,2,2,3,3,3,6,6,-4,0,5,0,4,0,0,0,-1], label: 'Sentiments'}
    
  ];
  public lineChartLabels:Array<any> = ["1st June","5th June","6th June","7th June","8th June","10th June","11th June","12th June","13th June","14th June","15th June","17th June","18th June","19th June","20th June","21th June","22th June","25th June","27th June"];
  chartOptions = {
   
    scales: {
      
             yAxes: [{
       scaleLabel:  {
         display: true,
         //labelString: 'Estado'
       },
       ticks: {
                
                     min: -4,
                     max: 6,
                     stepSize: 3,
                     callback: function(value, index, values) {
                       
                     if(value == -4){
                        var dasLabel='Unsatisfactory';                             
                     }
                     if(value == -1){
                        var dasLabel='Partially Bad';                            
                     }
                     if(value >= 5){
                        var dasLabel='Excellent';                             
                     }    
                     if(value > 0 && value < 5){
                       var dasLabel='Partially Good';                             
                    }    
                    if(value == 0){
                     var dasLabel='Ok';                             
                  }    
 
                     return dasLabel;
                     }
                 }
             }]  ,
             xAxes: [{
       scaleLabel: {
         display: true,
         
       }
             }]
         }
   };
 
 
 
 
 
 
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  
  // events
 
  
}


