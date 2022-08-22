import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  salespeople: Array<any> = [];
  zones: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.salespeople = [{name:"Marco Weyer", color:"#E31937"}, {name:"Mirko Führer", color:"#58595B"}];
    this.zones = ["a7a","a7ten"];
  }

}
