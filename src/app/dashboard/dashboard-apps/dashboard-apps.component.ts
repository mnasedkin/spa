import { Component, OnInit } from '@angular/core';
import { faLock, faDesktop, faDownload, faShareAlt, faWindowRestore, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard-apps',
  templateUrl: './dashboard-apps.component.html',
  styleUrls: ['../dashboard.component.css']
})
export class DashboardAppsComponent implements OnInit {

  apps = [
    {
      name: 'Product1',
      icon: faLock,
      status : 'Activated',
      statusIcon: faCheckCircle,
      url: '/driver-updater',
    },
    {
      name: 'Product2',
      icon: faDesktop,
      status : 'Activated',
      statusIcon: faCheckCircle,
      url: '/driver-updater',
    },
    {
      name: 'Product3',
      icon: faDownload,
      status : 'Activated',
      statusIcon: faCheckCircle,
      url: '/driver-updater',
    },
    {
      name: 'Product4',
      icon: faShareAlt,
      status : 'Activated',
      statusIcon: faCheckCircle,
      url: '/driver-updater',
    },
    {
      name: 'Product5',
      icon: faWindowRestore,
      status : 'Activated',
      statusIcon: faCheckCircle,
      url: '/driver-updater',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
