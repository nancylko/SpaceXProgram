import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { observable, BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";
import * as Rx from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private baseURL = 'https://api.spaceXdata.com/v3/launches?';

  public yearVal = new BehaviorSubject('');
  currentYear = this.yearVal.asObservable();
  public launchVal = new BehaviorSubject('');
  currentLaunch = this.launchVal.asObservable();
  public landVal = new BehaviorSubject('');
  currentLand = this.landVal.asObservable();

  constructor(private http: HttpClient) { }


  getApis(apiName, param?: any): BehaviorSubject<any> {

    let subject = new Rx.BehaviorSubject({});
    let url: any;

    if (apiName == 'GetAll') {
      url = this.baseURL + 'launches?limit=100';
    }
    else if (apiName == 'GetSpaceData') {
      if (param.year != '' && param.launch == '' && param.land == '') {
        url = this.baseURL + 'launches?limit=100' + '&launch_year=' + param.year;

      } else if (param.year != '' && param.launch != '' && param.land == '') {
        url = this.baseURL + 'launches?limit=100' + '&launch_success=' + param.launch + '&launch_year=' + param.year;

      }
      else if (param.year != '' && param.launch == '' && param.land != '') {
        url = this.baseURL + 'launches?limit=100' + '&land_success=' + param.land + '&launch_year=' + param.year;

      }
      else if (param.year != '' && param.launch != '' && param.land != '') {
        url = this.baseURL + 'launches?limit=100' + '&launch_success=' + param.launch + '&land_success=' + param.land + '&launch_year=' + param.year;

      }
      else if (param.year == '' && param.launch != '' && param.land == '') {
        url = this.baseURL + 'launches?limit=100' + '&launch_success=' + param.launch;

      }
      else if (param.year == '' && param.launch != '' && param.land != '') {
        url = this.baseURL + 'launches?limit=100' + '&launch_success=' + param.launch + '&land_success=' + param.land;

      }
      else if (param.year == '' && param.launch == '' && param.land != '') {
        url = this.baseURL + 'launches?limit=100' + '&land_success=' + param.land;

      }
    }
    this.http.get(url).pipe(map((res: any) => {
      return res;
    }))
      .subscribe(val => {
        if ( val != undefined && val != [] && val != {} && val != null && Object.keys(val).length != 0) {
          subject.next(val);
        }
      }, (err) => {

      }
      );
    return subject;

  }

}
