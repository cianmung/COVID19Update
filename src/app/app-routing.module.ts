import { Covid19Component } from "./covid19/covid19.component";
import { ProfileComponent } from "./profile/profile.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "covid19",
    pathMatch: "full",
  },
  {
    path: "profile",
    component: ProfileComponent,
  },
  {
    path: "covid19",
    component: Covid19Component,
  },
  {
    path: "home",
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
