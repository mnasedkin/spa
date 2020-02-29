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
import { LazyLoadImageModule, scrollPreset } from 'ng-lazyload-image';

import { DriverUpdaterComponent } from './driver-updater/driver-updater.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatMenuModule} from '@angular/material/menu';
import { UserMenuComponent } from './user-menu/user-menu.component'
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { ReactiveFormsModule } from '@angular/forms';
import { ProfileEditorComponent } from './shared/forms/profile-editor/profile-editor.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { DashboardAppsComponent } from './dashboard/dashboard-apps/dashboard-apps.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import { DashboardUpdatesComponent } from './dashboard/dashboard-updates/dashboard-updates.component';
import {MatTableModule} from "@angular/material/table";
import { LinksComponent } from './shared/components/links/links.component';

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
    DriverUpdaterComponent,
    BreadcrumbComponent,
    UserMenuComponent,
    ProfileEditorComponent,
    DashboardUserComponent,
    DashboardAppsComponent,
    DashboardUpdatesComponent,
    LinksComponent,
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
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    FontAwesomeModule,
    MatProgressSpinnerModule,
    OverlayModule,
    MatMenuModule,
    LazyLoadImageModule.forRoot({
      preset: scrollPreset // <--  use scrollPreset with LazyLoadImage
    }),
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
