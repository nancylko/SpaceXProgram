import { Component, OnInit } from '@angular/core';
import * as _isEmpty from 'lodash';
import { NgxSpinnerService } from "ngx-spinner";
import { CommonServiceService } from '../common-service.service';


@Component({
  selector: 'app-spaceprog-panel',
  templateUrl: './spaceprog-panel.component.html',
  styleUrls: ['./spaceprog-panel.component.css']
})
export class SpaceprogPanelComponent implements OnInit {


  spaceProgArr = [];
  selectedYear = '';
  selectedLand = '';
  selectedLaunch = '';

  constructor(public common: CommonServiceService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {

    this.spinner.show();
    this.common.getApis('GetAll').subscribe(v => {
      if (v != undefined && v != [] && v != {} && v != null && Object.keys(v).length != 0) {
        this.spinner.hide();
        this.spaceProgArr = v;
      }

    });
    this.common.yearVal.subscribe(data => {
      if (data != '') {
        this.selectedYear = data;
        this.getSpaceProg();
      }
    }
    );
    this.common.launchVal.subscribe(data => {
      if (data) {
        this.selectedLaunch = data;
        this.getSpaceProg();
      }


    }
    );
    this.common.landVal.subscribe(data => {
      if (data) {
        this.selectedLand = data;
        this.getSpaceProg();
      }
    }
    );
  }

  getSpaceProg() {
    this.spaceProgArr = [];

    const data = {
      year: this.selectedYear,
      launch: this.selectedLaunch,
      land: this.selectedLand
    }
    this.spinner.show();
    this.common.getApis('GetSpaceData', data).subscribe(v => {
      if (v != undefined && v != [] && v != {} && v != null && Object.keys(v).length != 0) {
        this.spinner.hide()
        this.spaceProgArr = v;
      }
      else if (!v || v == {} || v == [] || _isEmpty(v) == true || v != undefined) {
        this.spinner.hide()
        this.spaceProgArr = [];
      }


    });

  }
}


