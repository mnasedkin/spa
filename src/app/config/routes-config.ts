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
  {
    path: '', component: MainLayoutComponent, data: {breadcrumb: 'Home'}, children: [
      // path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},//Если путь совпадает с корневым роутом, тогда делаем редирект на home
      {path: '', component: DashboardComponent, data: {breadcrumb: 'Dashboard', animation: 'DashboardPage'}},
      {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: 'Dashboard', animation: 'DashboardPage'}},
      {path: 'driver-updater', component: DriverUpdaterComponent, data: {breadcrumb: 'Driver Updater', animation: 'UpdatePage'}},
      {path: 'help', component: HelpComponent, data: {breadcrumb: 'Help', animation: 'HelpPage'}},
      {path: 'settings', component: SettingsComponent, data: {breadcrumb: 'Settings', animation: 'SettingsPage'}},
      {path: 'winapi', component: WinapiComponent, data: {breadcrumb: 'Windows API',animation: 'WinapiPage' }},
    ]
  },
  {
    path: '', component: FlexLayoutComponent, data: {breadcrumb: 'Home'}, children: [
    // path: '', component: MainLayoutComponent, children: [
      {path: 'experiments', component: ExperimentsComponent, data: {breadcrumb: 'Experiments'}},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
