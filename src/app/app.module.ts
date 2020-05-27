import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { ProfileComponent } from "./profile/profile.component";
import { Covid19Component } from "./covid19/covid19.component";
import { FormsModule } from "@angular/forms";
import { CountryDisplayFilterPipe } from "./pipes/country-display-filter.pipe";
import { HttpClientModule } from "@angular/common/http";
import { Covid19CountriesComparisonComponent } from "./covid19-countries-comparison/covid19-countries-comparison.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    Covid19Component,
    CountryDisplayFilterPipe,
    Covid19CountriesComparisonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
