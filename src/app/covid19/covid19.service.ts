import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class Covid19Service {
  //Api link
  readonly getCountriesApiUrl: string = "https://api.covid19api.com/countries";
  readonly getWorldWideUpdateApiUrl: string =
    "https://api.covid19api.com/world/total";
  readonly getEachCountryDetailApiUrl: string =
    "https://api.covid19api.com/total/country/";

  //result variables
  resultEachCountryDetail: Array<any> = [];
  resultWorldWideUpdate: Object = {};
  resultCountries: Array<any> = [];

  constructor(private http: HttpClient) {
    this.getListOfCountriesFromApi();
    this.getWorldWideUpdateFromApi();
  }

  getListOfCountriesFromApi() {
    this.http.get(this.getCountriesApiUrl).subscribe((data) => {
      for (var i in data) {
        data.hasOwnProperty(i) && this.resultCountries.push(data[i].Country);
      }
      this.resultCountries.sort((a, b) => (a < b ? -1 : 1));
    });
  }

  getListOfCountries() {
    return this.resultCountries;
  }

  getWorldWideUpdateFromApi() {
    this.http.get(this.getWorldWideUpdateApiUrl).subscribe((data) => {
      for (var i in data) {
        this.resultWorldWideUpdate[i] = data[i];
      }
    });
  }

  getWorldWideUpdate() {
    return this.resultWorldWideUpdate;
  }

  getEachCountryDetailFromApi(countryName: string) {
    return this.http.get(this.getEachCountryDetailApiUrl + countryName);
  }
}
