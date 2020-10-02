import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })

export class CovidTracker {
    private httpHeader: HttpHeaders;
    _data = {
        confirmed: {value: 0},
        recovered: {value: 0},
        deaths: {value: 0}
    };
    _searchedCountryData = {};

    dataTracker = new BehaviorSubject<any>(this._data);
    countryDataTracker = new BehaviorSubject<any>(this._searchedCountryData);

    getData(){
        return this.dataTracker.asObservable()
    }

    setData(data){
        this.dataTracker.next(data)
    }

    constructor(private http: HttpClient) {
        this.httpHeader = new HttpHeaders()
    }
    refreshWorldData(){
        this.getWorldData().subscribe(res => this.setData(res))
    }

    onCountrySearch(country){
        this.http.get(`https://covid19.mathdro.id/api/countries/${country}`, { headers: this.httpHeader }).subscribe( res => this.countryDataTracker.next(res))
    }

    getWorldData() {
        return this.http.get("https://covid19.mathdro.id/api", { headers: this.httpHeader })
    }
}