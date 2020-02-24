import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {MainLayoutComponent} from "./shared/components/main-layout/main-layout.component";
import {ExperimentsComponent} from "./experiments/experiments.component";
import {SpaNavComponent} from "./spa-nav/spa-nav.component";

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},//Если путь совпадает с корневым роутом, тогда делаем редирект на home
      {path: '', component: SpaNavComponent},
      {path: 'experiments', component: ExperimentsComponent},
      {path: 'help', component: SpaNavComponent},
      {path: 'dashboard', component: SpaNavComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
