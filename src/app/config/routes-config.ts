import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {FlexLayoutComponent} from "../shared/components/flex-layout/flex-layout.component";
import {MainLayoutComponent} from "../shared/components/main-layout/main-layout.component";
import {DashboardComponent} from "../dashboard/dashboard.component";
import {HelpComponent} from "../help/help.component";
import {ExperimentsComponent} from "../experiments/experiments.component";
import {SpaNavComponent} from "../spa-nav/spa-nav.component";
import {WinapiComponent} from "../winapi/winapi.component";
import {DriverUpdaterComponent} from "../driver-updater/driver-updater.component";
import {SettingsComponent} from "../settings/settings.component";

export const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},//Если путь совпадает с корневым роутом, тогда делаем редирект на home
  {path: 'dashboard', component: DashboardComponent},
  {path: 'driver-updater', component: DriverUpdaterComponent},
  {path: 'help', component: HelpComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'winapi', component: WinapiComponent},
  {
    path: '', component: FlexLayoutComponent, children: [
    // path: '', component: MainLayoutComponent, children: [
      {path: 'experiments', component: ExperimentsComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
