import { Covid19Service } from "./covid19.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-covid19",
  templateUrl: "./covid19.component.html",
  styleUrls: ["./covid19.component.css"],
  providers: [Covid19Service],
})
export class Covid19Component {
  countryName: string = "";
  selectedCountry: string = "";
  countries: Array<any> = [];
  worldWideTotalData: any = {
    TotalConfirmed: undefined,
    TotalDeaths: undefined,
    TotalRecovered: undefined,
  };
  eachCountryDetails: Array<any> = [];
  eachCountryDetailsPercentage: Array<any> = [];

  //Error or Success variables
  isError: boolean = false;
  error: string = "";
  isComparison: boolean = false;

  constructor(private _covid19Service: Covid19Service) {}

  ngOnInit() {
    this.countries = this._covid19Service.getListOfCountries();
    this.worldWideTotalData = this._covid19Service.getWorldWideUpdate();
  }

  getCountryDetail(country: string) {
    this.selectedCountry = country.toLowerCase().replace(/ /g, "-");
    this._covid19Service
      .getEachCountryDetailFromApi(this.selectedCountry)
      .subscribe((res: Array<any>) => {
        let data = res[res.length - 1];
        let prevData = res[res.length - 2];
        if (
          this.eachCountryDetails.some((each) => {
            return each.Country === data.Country;
          })
        ) {
          this.isError = true;
          this.error = "The country you selected has already existed.";
        } else {
          this.isError = false;
          if (this.eachCountryDetails.length >= 4) {
            this.isError = true;
            this.error = "You have reached maximum number added.";
          } else {
            this.isError = false;
            this.countryName = "";
            let deathP = (data.Deaths / data.Confirmed) * 100;
            let recoveredP = (data.Recovered / data.Confirmed) * 100;
            let addedCases = data.Confirmed - prevData.Confirmed;
            data.DeathP = deathP;
            data.RecoveredP = recoveredP;
            data.AddedCases = addedCases;
            this.eachCountryDetails.push(data);
          }
        }
      });
  }

  removeCountryDetail(name) {
    this.isError = false;
    let index = this.eachCountryDetails.indexOf(name);
    this.eachCountryDetails.splice(index, 1);
  }

  isComparisonHandle() {
    this.isError = false;
    this.isComparison = true;
  }

  getEachCountryDetails(): Array<any[]> {
    return this.eachCountryDetails;
  }

  closeComparison(value: boolean) {
    this.isError = false;
    this.isComparison = value;
  }

  handleCompareError(value) {
    if (typeof value == "string") {
      this.isError = true;
      this.error = value;
    }
    if (typeof value == "boolean") {
      this.isError = value;
    }
  }
}
