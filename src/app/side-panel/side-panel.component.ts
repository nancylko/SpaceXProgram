import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../common-service.service';


@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  constructor(public common: CommonServiceService) { }

  ngOnInit(): void {


  }
  getLand(land) {
    this.common.landVal.next(land)
  }
  getLaunch(launch) {
    this.common.launchVal.next(launch);
  }
  getYear(year) {

    this.common.yearVal.next(year);

  }
}
