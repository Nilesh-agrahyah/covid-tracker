import { Component, OnInit } from '@angular/core';
import { CovidTracker } from '../app.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchResult;
  searchValue = "";
  searchedCountry;

  constructor(private service: CovidTracker) { }
  searchCountry() {
    this.service.onCountrySearch(this.searchValue).subscribe(res => {
      if (res.status == 200) {
        this.searchedCountry = this.searchValue;
        this.searchResult = res.body
      }
    },
    () => {
      alert(`Data for country '${this.searchValue}' not found`)
    });
  }

  ngOnInit(): void { }

}
