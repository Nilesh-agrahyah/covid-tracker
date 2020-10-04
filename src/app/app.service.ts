import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: "root" })

export class CovidTracker {
    private httpHeader: HttpHeaders;
    _data = {
        confirmed: { value: 0 },
        recovered: { value: 0 },
        deaths: { value: 0 }
    };
    _countries = [];

    dataTracker = new BehaviorSubject<any>(this._data);
    countriesTracker = new BehaviorSubject<any>(this._countries);

    getData() {
        return this.dataTracker.asObservable()
    }

    getCountriesData() {
        return this.countriesTracker.asObservable()
    }

    setData(data) {
        this.dataTracker.next(data)
    }

    constructor(private http: HttpClient) {
        this.httpHeader = new HttpHeaders()
    }

    refreshWorldData() {
        this.getWorldData().subscribe(res => this.setData(res))
    }

    onCountryDetailedSearch(country, stats) {
        return this.http.get(`https://covid19.mathdro.id/api/countries/${country}/${stats}`, { headers: this.httpHeader, observe: 'response' })
    }

    getCountries() {
        this.http.get("https://covid19.mathdro.id/api/countries", { headers: this.httpHeader }).subscribe((res: any) => {
            this.countriesTracker.next(res.countries)
        })
    }

    onCountrySearch(country) {
        return this.http.get(`https://covid19.mathdro.id/api/countries/${country}`, { headers: this.httpHeader, observe: 'response' })
    }

    getWorldData() {
        return this.http.get("https://covid19.mathdro.id/api", { headers: this.httpHeader })
    }
}