import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-covid19-countries-comparison",
  templateUrl: "./covid19-countries-comparison.component.html",
  styleUrls: ["./covid19-countries-comparison.component.css"],
})
export class Covid19CountriesComparisonComponent {
  error: string = "";

  @Input()
  eachCountryDetails: Array<any> = [];

  @Output()
  isComparison: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  errMessage: EventEmitter<any> = new EventEmitter<any>();

  closeComparison() {
    this.isComparison.emit(false);
  }

  removeCountryDetail(data) {
    if (this.eachCountryDetails.length <= 2) {
      this.errMessage.emit("It needs at least two countries for comparison.");
    } else {
      this.errMessage.emit(false);
      let index = this.eachCountryDetails.indexOf(data);
      this.eachCountryDetails.splice(index, 1);
    }
  }

  decideMaxAndMin(num: number, index: string): string {
    if (index != "Recovered" && index != "RecoveredP") {
      if (num === Math.max(...this.eachCountryDetails.map((o) => o[index]))) {
        return "#ED0606"; //red color
      }
      if (num === Math.min(...this.eachCountryDetails.map((o) => o[index]))) {
        return "#13BC04"; //green color
      }
    }
    if (index == "Recovered" || index == "RecoveredP") {
      if (num === Math.max(...this.eachCountryDetails.map((o) => o[index]))) {
        return "#13BC04"; //green color
      }
      if (num === Math.min(...this.eachCountryDetails.map((o) => o[index]))) {
        return "#ED0606"; //red color
      }
    }
  }
}
