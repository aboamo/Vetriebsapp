import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Input() salespeople: Array<any> = [];

  constructor() { }

  ngOnInit() {
    console.log(this.salespeople);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['salespeople'].currentValue);
}

}
