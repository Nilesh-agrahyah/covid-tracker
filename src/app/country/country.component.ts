import { Component, OnInit } from '@angular/core';
import { CovidTracker } from '../app.service'

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  countriesList=[];
  country: string = "";
  category: string = "";
  result: Array<any> = [];
  cardBorderColor;
  cardBackgroundColor;
  
  constructor(private service: CovidTracker) { }

  ngOnInit(): void {
    this.service.getCountriesData().subscribe( data => {
      this.countriesList = data
      if(this.countriesList.length == 0){
        this.service.getCountries()
      }
    })
  }

  cardBackgroundClass(){
    switch(this.category){
      case '':
        return 'bg-primary'
      case 'confirmed':
        return 'bg-primary'
      case 'deaths':
        return 'bg-danger'
      default:
        return 'bg-success'
    }
  }

  cardBorderClass(){
    switch(this.category){
      case '':
        return 'border-primary'
      case 'confirmed':
        return 'border-primary'
      case 'deaths':
        return 'border-danger'
      default:
        return 'border-success'
    }
  }

  search() {
    this.service.onCountryDetailedSearch(this.country, this.category).subscribe( (res: any) => {
      this.cardBackgroundColor=this.cardBackgroundClass()
      this.cardBorderColor= this.cardBorderClass()
      this.result = res.body
    },
    err =>{
      alert("Couldn't fetch data, please try again later!")
    })
  }
}
