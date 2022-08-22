import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-side-bar-right',
  templateUrl: './side-bar-right.component.html',
  styleUrls: ['./side-bar-right.component.css']
})
export class SideBarRightComponent implements OnInit {

  @Input() salespeople: Array<any> = [];
  @Input() zones: Array<any> = [];

  zoneString: String = '';
  zoneColor: String = '';

  constructor() { }

  ngOnInit() {
    
  }

  onAddSalesPerson(){
    this.salespeople.push({name:"", color:"#E31937"});
  }

  onSave(salesperson:any){
    console.log(salesperson);
    this.getZones(this.zoneString, salesperson);
  }

  getZones(zoneString: String, salesperson: any){
    let splits = zoneString.split(';');
    let personZones = []; 
    for (let split of splits) {
      if (split.includes("-")){
        let intervalSplits = zoneString.split('-');
        let upperLimit = parseInt(intervalSplits[1]);
        let lowerLimit = parseInt(intervalSplits[0]);
        for (let i = lowerLimit; i <= upperLimit; i++){
          personZones.push(i.toString());
        }
      }
      else {
        personZones.push(split);
      }
    };
  salesperson.zones = personZones;
  console.log(this.salespeople);
  }

}
