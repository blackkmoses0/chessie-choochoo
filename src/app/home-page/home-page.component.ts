import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Station } from '../models/station/station';
import { MetroService } from '../services/metro.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  standardRoute = [];
  selectedCode: string;
  stationList: any;
  arrivalTimes = [];
  lineCode: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private metroService: MetroService
  ) {}

  ngOnInit() {
    this.lineCode = this.route.snapshot.paramMap.get('LineCode');
    this.loadInitialMetroInformation();
  }

  async loadInitialMetroInformation() {
    try {
      this.standardRoute = await this.metroService.getStationRoute(
        this.lineCode
      );
      this.stationList = await this.metroService.getStationList(this.lineCode);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }

  getArrivalTime(route: any) {
    this.router.navigateByUrl(
      `/station-information/${this.lineCode}/${route.code}`
    );
  }

  async showTimes() {
    try {
      this.arrivalTimes = await this.metroService.getArrivalTimes(
        this.selectedCode
      );
    } catch (error) {
      alert(error);
      return;
    }
  }

  getLineBackgroundColor(color: string) {
    let backgroundColor = '';
    switch (color) {
      case 'RD':
        backgroundColor = 'red';
        break;
      case 'BL':
        backgroundColor = 'blue';
        break;
      case 'YL':
        backgroundColor = 'yellow';
        break;
      case 'OR':
        backgroundColor = 'orange';
        break;
      case 'GR':
        backgroundColor = 'green';
        break;
      case 'SV':
        backgroundColor = 'silver';
        break;
      default:
        backgroundColor = 'silver';
        break;
    }
    return backgroundColor;
  }

  back() {
    this.router.navigateByUrl('/landing-page');
  }
}
