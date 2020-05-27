import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "countryDisplayFilter",
})
export class CountryDisplayFilterPipe implements PipeTransform {
  transform(items: any[], countryName: string): any[] {
    if (!items) {
      return [];
    }
    if (!countryName) {
      return items;
    }
    return items.filter((input) => {
      return input.toLowerCase().startsWith(countryName.toLowerCase());
    });
  }
}
