import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SpaNavComponent } from './spa-nav/spa-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SpaNavListComponent } from './spa-nav-list/spa-nav-list.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import {AppRoutingModule} from "./app-routing.module";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ButtonComponent } from './button/button.component';
import { GalleryLazyLoadComponent } from './gallery-lazy-load/gallery-lazy-load.component';
import { WinzipAnimationComponent } from './winzip-animation/winzip-animation.component';
import { FlexLayoutComponent } from './shared/components/flex-layout/flex-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperimentsComponent } from './experiments/experiments.component';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WinapiComponent } from './winapi/winapi.component';
import { SettingsComponent } from './settings/settings.component';
import { DriverUpdaterComponent } from './driver-updater/driver-updater.component';

@NgModule({
  declarations: [
    AppComponent,
    SpaNavComponent,
    SpaNavListComponent,
    MainLayoutComponent,
    ButtonComponent,
    GalleryLazyLoadComponent,
    WinzipAnimationComponent,
    FlexLayoutComponent,
    ExperimentsComponent,
    HelpComponent,
    DashboardComponent,
    WinapiComponent,
    SettingsComponent,
    DriverUpdaterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
