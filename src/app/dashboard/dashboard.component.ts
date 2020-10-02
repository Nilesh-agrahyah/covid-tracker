import { Component, OnDestroy, OnInit } from '@angular/core';
import { CovidTracker } from '../app.service';
import { Subscription } from "rxjs"

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  dashboard = {
    confirmed: 0,
    deaths: 0,
    recovered: 0
  };

  timestamp="";

  imageData = [
    { alt: 'confirmed', src: 'assets/images/confirmed.png', name: 'Confirmed Cases', number: this.dashboard.confirmed, bg: 'border-info', txt:'text-info'},
    { alt: 'recovered', src: 'assets/images/recovered.png', name: 'Recovered Cases', number: this.dashboard.recovered, bg: 'border-success', txt:'text-success' },
    { alt: 'deaths', src: 'assets/images/deaths.png', name: 'Death Cases', number: this.dashboard.deaths, bg: 'border-danger', txt:'text-danger' }
  ]
  constructor(private service: CovidTracker) { }

  ngOnInit(): void {
    this._subscription = this.service.getData().subscribe(res => {
      this.imageData.forEach(item => {
        switch (item.alt) {
          case 'recovered':
            item.number = res.recovered.value
            break
          case 'deaths':
            item.number = res.deaths.value
            break
          default:
            item.number = res.confirmed.value
        }
        this.timestamp = res.lastUpdate
      })
    })        
  }
  onClickRefresh() {
    this.service.refreshWorldData()
  }
  ngOnDestroy() {
    this._subscription.unsubscribe()
  }

}
